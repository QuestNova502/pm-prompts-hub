// PM Prompts Hub - Application Logic with Bilingual Support

let currentPrompts = [];
let favorites = new Set(JSON.parse(localStorage.getItem('pmFavorites') || '[]'));
let currentLang = localStorage.getItem('pmLang') || 'zh';
let currentContentLang = 'zh';
let currentPrompt = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadPrompts();
    setupEventListeners();
    updateFavoritesCount();
    applyLanguage(currentLang);
});

// Setup event listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchInput').addEventListener('input', filterPrompts);

    // Global language toggle
    document.getElementById('globalLangToggle').addEventListener('click', toggleGlobalLanguage);

    // Modal close on background click
    document.getElementById('promptModal').addEventListener('click', (e) => {
        if (e.target.id === 'promptModal') {
            closeModal();
        }
    });
}

// Load prompts from data
function loadPrompts() {
    currentPrompts = window.PROMPTS_DATA || [];
    document.getElementById('totalPrompts').textContent = currentPrompts.length;

    // Generate category filters
    const categories = [...new Set(currentPrompts.map(p => p.category))];
    document.getElementById('categoryCount').textContent = categories.length;

    const filtersContainer = document.getElementById('categoryFilters');
    filtersContainer.innerHTML = `
        <button class="filter-chip active" data-category="all">${currentLang === 'zh' ? '全部' : 'All'}</button>
        ${categories.map(cat => {
            const name = window.CATEGORY_NAMES && window.CATEGORY_NAMES[cat]
                ? window.CATEGORY_NAMES[cat][currentLang]
                : cat;
            return `<button class="filter-chip" data-category="${cat}">${name}</button>`;
        }).join('')}
    `;

    // Add click handlers
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterPrompts();
        });
    });

    renderPrompts(currentPrompts);
}

// Filter prompts
function filterPrompts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeCategory = document.querySelector('.filter-chip.active').dataset.category;

    let filtered = currentPrompts;

    // Category filter
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(p => {
            const titleMatch = (p.title_zh || '').toLowerCase().includes(searchTerm) ||
                              (p.title_en || '').toLowerCase().includes(searchTerm);
            const descMatch = (p.description_zh || '').toLowerCase().includes(searchTerm) ||
                            (p.description_en || '').toLowerCase().includes(searchTerm);
            const tagsMatch = p.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return titleMatch || descMatch || tagsMatch;
        });
    }

    renderPrompts(filtered);
}

// Render prompts grid
function renderPrompts(prompts) {
    const grid = document.getElementById('promptsGrid');

    if (prompts.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div>${currentLang === 'zh' ? '没有找到匹配的提示词' : 'No prompts found'}</div>
            </div>
        `;
        return;
    }

    grid.innerHTML = prompts.map(prompt => createPromptCard(prompt)).join('');
}

// Create prompt card HTML
function createPromptCard(prompt) {
    const isFavorite = favorites.has(prompt.id);
    const title = currentLang === 'zh' ? prompt.title_zh : prompt.title_en;
    const titleSecondary = currentLang === 'zh' ? prompt.title_en : prompt.title_zh;
    const description = currentLang === 'zh' ? prompt.description_zh : prompt.description_en;
    const categoryName = prompt.category_name ? prompt.category_name[currentLang] : prompt.category;

    return `
        <div class="prompt-card" onclick="openPromptModal('${prompt.id}')">
            <div class="prompt-header">
                <div>
                    <div class="prompt-title">${title}</div>
                    <div class="prompt-title-en">${titleSecondary}</div>
                </div>
                <button
                    class="favorite-btn ${isFavorite ? 'active' : ''}"
                    onclick="event.stopPropagation(); toggleFavorite('${prompt.id}')"
                >
                    ${isFavorite ? '★' : '☆'}
                </button>
            </div>
            <div class="prompt-description">${description}</div>
            <div class="prompt-tags">
                ${prompt.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <span class="prompt-category">${categoryName}</span>
        </div>
    `;
}

// Open prompt modal
function openPromptModal(promptId) {
    currentPrompt = currentPrompts.find(p => p.id === promptId);
    if (!currentPrompt) return;

    const modal = document.getElementById('promptModal');
    const title = currentLang === 'zh' ? currentPrompt.title_zh : currentPrompt.title_en;
    const titleSecondary = currentLang === 'zh' ? currentPrompt.title_en : currentPrompt.title_zh;
    const description = currentLang === 'zh' ? currentPrompt.description_zh : currentPrompt.description_en;

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalTitleEn').textContent = titleSecondary;
    document.getElementById('modalDescription').textContent = description;

    // Reset to Chinese content by default
    currentContentLang = 'zh';
    updateModalContent();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('promptModal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('copyFeedback').textContent = '';
}

// Switch content language in modal
function switchContentLang(lang) {
    currentContentLang = lang;
    updateModalContent();

    // Update tab active state
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.lang === lang);
    });
}

// Update modal content based on language
function updateModalContent() {
    if (!currentPrompt) return;

    const contentDiv = document.getElementById('modalContent');

    if (currentContentLang === 'zh') {
        // For Chinese, we need to translate or show original
        contentDiv.textContent = currentPrompt.content;
        document.querySelector('.copy-btn').textContent = '复制提示词';
    } else {
        // Show original English content
        contentDiv.textContent = currentPrompt.content;
        document.querySelector('.copy-btn').textContent = 'Copy Prompt';
    }
}

// Copy content to clipboard
function copyContent() {
    const content = document.getElementById('modalContent').textContent;
    navigator.clipboard.writeText(content).then(() => {
        const feedback = document.getElementById('copyFeedback');
        feedback.textContent = currentLang === 'zh' ? '✓ 已复制' : '✓ Copied';
        setTimeout(() => {
            feedback.textContent = '';
        }, 2000);
    });
}

// Toggle favorite
function toggleFavorite(promptId) {
    if (favorites.has(promptId)) {
        favorites.delete(promptId);
    } else {
        favorites.add(promptId);
    }

    localStorage.setItem('pmFavorites', JSON.stringify([...favorites]));
    updateFavoritesCount();
    filterPrompts(); // Re-render to update favorite icons
}

// Update favorites count
function updateFavoritesCount() {
    document.getElementById('favoriteCount').textContent = favorites.size;
}

// Toggle global language
function toggleGlobalLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('pmLang', currentLang);
    applyLanguage(currentLang);
    loadPrompts(); // Reload to update all text
}

// Apply language to UI
function applyLanguage(lang) {
    const toggleText = document.getElementById('langToggleText');
    const statLabels = document.querySelectorAll('.stat-label');

    if (lang === 'zh') {
        toggleText.textContent = 'Switch to English';
        statLabels[0].textContent = '提示词模板';
        statLabels[1].textContent = '分类';
        statLabels[2].textContent = '收藏';
        document.getElementById('searchInput').placeholder = '搜索提示词...';
    } else {
        toggleText.textContent = '切换到中文';
        statLabels[0].textContent = 'Prompts';
        statLabels[1].textContent = 'Categories';
        statLabels[2].textContent = 'Favorites';
        document.getElementById('searchInput').placeholder = 'Search prompts...';
    }
}
