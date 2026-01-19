// PM Prompts Hub - Modern SaaS Dashboard with Tailwind CSS

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

    const allButton = `<button class="filter-chip px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200" data-category="all">${currentLang === 'zh' ? '全部' : 'All'}</button>`;

    const categoryButtons = categories.map(cat => {
        const name = window.CATEGORY_NAMES && window.CATEGORY_NAMES[cat]
            ? window.CATEGORY_NAMES[cat][currentLang]
            : cat;
        return `<button class="filter-chip px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 hover:border-indigo-300 transition-all duration-200" data-category="${cat}">${name}</button>`;
    }).join('');

    filtersContainer.innerHTML = allButton + categoryButtons;

    // Add click handlers
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(b => {
                b.className = 'filter-chip px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 hover:border-indigo-300 transition-all duration-200';
            });
            e.target.className = 'filter-chip px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200';
            filterPrompts();
        });
    });

    renderPrompts(currentPrompts);
}

// Filter prompts
function filterPrompts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeButton = document.querySelector('.filter-chip.bg-gradient-to-r');
    const activeCategory = activeButton ? activeButton.dataset.category : 'all';

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
            <div class="col-span-full text-center py-16">
                <div class="text-6xl mb-4 opacity-30">📭</div>
                <p class="text-slate-500 text-lg">${currentLang === 'zh' ? '没有找到匹配的提示词' : 'No prompts found'}</p>
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
        <div class="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer card-hover" onclick="openPromptModal('${prompt.id}')">
            <!-- Header -->
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    <h3 class="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
                        ${title}
                    </h3>
                    <p class="text-xs text-slate-500">
                        ${titleSecondary}
                    </p>
                </div>
                <button
                    class="ml-3 text-2xl transition-all duration-200 hover:scale-125 ${isFavorite ? 'text-amber-500' : 'text-slate-300 hover:text-amber-400'}"
                    onclick="event.stopPropagation(); toggleFavorite('${prompt.id}')"
                >
                    ${isFavorite ? '★' : '☆'}
                </button>
            </div>

            <!-- Description -->
            <p class="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                ${description}
            </p>

            <!-- Footer -->
            <div class="flex items-center justify-between">
                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                    ${prompt.tags.slice(0, 2).map(tag =>
                        `<span class="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-medium">${tag}</span>`
                    ).join('')}
                </div>

                <!-- Category Badge -->
                <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium whitespace-nowrap">
                    ${categoryName}
                </span>
            </div>
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

    // Reset to default content language
    currentContentLang = 'zh';
    updateModalContent();

    // Reset tab styles
    document.querySelectorAll('.lang-tab').forEach(tab => {
        if (tab.dataset.lang === 'zh') {
            tab.className = 'lang-tab px-4 py-2 font-medium text-sm transition-all border-b-2 border-indigo-600 text-indigo-600';
        } else {
            tab.className = 'lang-tab px-4 py-2 font-medium text-sm transition-all border-b-2 border-transparent text-slate-500 hover:text-slate-700';
        }
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('promptModal').classList.add('hidden');
    document.body.style.overflow = '';
    document.getElementById('copyFeedback').textContent = '';
}

// Switch content language in modal
function switchContentLang(lang) {
    currentContentLang = lang;
    updateModalContent();

    // Update tab active state
    document.querySelectorAll('.lang-tab').forEach(tab => {
        if (tab.dataset.lang === lang) {
            tab.className = 'lang-tab px-4 py-2 font-medium text-sm transition-all border-b-2 border-indigo-600 text-indigo-600';
        } else {
            tab.className = 'lang-tab px-4 py-2 font-medium text-sm transition-all border-b-2 border-transparent text-slate-500 hover:text-slate-700';
        }
    });
}

// Update modal content based on language
function updateModalContent() {
    if (!currentPrompt) return;

    const contentDiv = document.getElementById('modalContent');
    contentDiv.textContent = currentPrompt.content;

    const copyBtn = document.querySelector('.px-6.py-3.bg-gradient-to-r');
    if (copyBtn) {
        copyBtn.textContent = currentLang === 'zh' ? '📋 复制提示词' : '📋 Copy Prompt';
    }
}

// Copy content to clipboard
function copyContent() {
    const content = document.getElementById('modalContent').textContent;
    navigator.clipboard.writeText(content).then(() => {
        const feedback = document.getElementById('copyFeedback');
        feedback.textContent = currentLang === 'zh' ? '✓ 已复制到剪贴板' : '✓ Copied to clipboard';
        setTimeout(() => {
            feedback.textContent = '';
        }, 2000);
    }).catch(err => {
        const feedback = document.getElementById('copyFeedback');
        feedback.textContent = '✗ 复制失败';
        feedback.className = 'text-red-600 font-medium text-sm';
        setTimeout(() => {
            feedback.textContent = '';
            feedback.className = 'text-green-600 font-medium text-sm';
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

    if (lang === 'zh') {
        toggleText.textContent = 'English';
        // Update other UI text as needed
    } else {
        toggleText.textContent = '中文';
        // Update other UI text as needed
    }
}
