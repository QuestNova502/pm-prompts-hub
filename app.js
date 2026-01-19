// PM Prompts Hub - Main Application
let currentPrompts = [];
let favorites = new Set(JSON.parse(localStorage.getItem('pmFavorites') || '[]'));

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadPrompts();
    setupEventListeners();
    updateFavoritesCount();
});

// Setup event listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchInput').addEventListener('input', filterPrompts);

    // Category filter
    document.querySelectorAll('.category-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterPrompts();
        });
    });

    // Favorites button
    document.getElementById('favoritesBtn').addEventListener('click', () => {
        const activePill = document.querySelector('.category-pill.active');
        if (activePill.dataset.category === 'favorites') {
            // Switch back to all
            document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
            document.querySelector('[data-category="all"]').classList.add('active');
        } else {
            // Show favorites
            document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
            activePill.dataset.category = 'favorites';
            activePill.classList.add('active');
        }
        filterPrompts();
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Load prompts data
function loadPrompts() {
    currentPrompts = window.PROMPTS_DATA || [];
    document.getElementById('totalPrompts').textContent = currentPrompts.length;
    renderPrompts(currentPrompts);
}

// Filter prompts based on search and category
function filterPrompts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeCategory = document.querySelector('.category-pill.active').dataset.category;

    let filtered = currentPrompts;

    // Filter by category
    if (activeCategory === 'favorites') {
        filtered = filtered.filter(p => favorites.has(p.id));
    } else if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    renderPrompts(filtered);
}

// Render prompts grid
function renderPrompts(prompts) {
    const grid = document.getElementById('promptsGrid');
    const noResults = document.getElementById('noResults');

    if (prompts.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = prompts.map(prompt => createPromptCard(prompt)).join('');
}

// Create prompt card HTML
function createPromptCard(prompt) {
    const isFavorited = favorites.has(prompt.id);
    const categoryColors = {
        strategy: 'bg-blue-100 text-blue-700',
        research: 'bg-green-100 text-green-700',
        agile: 'bg-purple-100 text-purple-700',
        storytelling: 'bg-pink-100 text-pink-700',
        analysis: 'bg-yellow-100 text-yellow-700',
        other: 'bg-gray-100 text-gray-700'
    };

    const categoryNames = {
        strategy: '产品策略',
        research: '用户研究',
        agile: '敏捷开发',
        storytelling: '故事叙述',
        analysis: '竞品分析',
        other: '其他工具'
    };

    return `
        <div class="bg-white rounded-xl shadow-md card-hover overflow-hidden">
            <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                    <span class="badge ${categoryColors[prompt.category]}">
                        ${categoryNames[prompt.category]}
                    </span>
                    <button onclick="toggleFavorite('${prompt.id}')" class="star-icon ${isFavorited ? 'favorited' : 'text-gray-300'} hover:text-yellow-400">
                        <i class="fas fa-star text-xl"></i>
                    </button>
                </div>

                <h3 class="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    ${prompt.title}
                </h3>

                <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                    ${prompt.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${prompt.tags.slice(0, 3).map(tag => `
                        <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            ${tag}
                        </span>
                    `).join('')}
                </div>

                <div class="flex space-x-2">
                    <button onclick="openModal('${prompt.id}')"
                            class="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition font-medium flex items-center justify-center space-x-2">
                        <i class="fas fa-eye"></i>
                        <span>查看详情</span>
                    </button>
                    <button onclick="copyPrompt('${prompt.id}')"
                            class="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
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
    filterPrompts(); // Re-render to update star icons
}

// Update favorites count
function updateFavoritesCount() {
    document.getElementById('favCount').textContent = favorites.size;
}

// Open modal with prompt details
function openModal(promptId) {
    const prompt = currentPrompts.find(p => p.id === promptId);
    if (!prompt) return;

    const categoryNames = {
        strategy: '产品策略',
        research: '用户研究',
        agile: '敏捷开发',
        storytelling: '故事叙述',
        analysis: '竞品分析',
        other: '其他工具'
    };

    document.getElementById('modalTitle').textContent = prompt.title;
    document.getElementById('modalCategory').textContent = categoryNames[prompt.category];
    document.getElementById('modalDescription').textContent = prompt.description;
    document.getElementById('modalUsage').textContent = prompt.usage || '适用于各种产品管理场景';
    document.getElementById('modalPrompt').textContent = prompt.content;

    document.getElementById('promptModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Store current prompt ID for copy function
    window.currentModalPromptId = promptId;
}

// Close modal
function closeModal(event) {
    if (!event || event.target.id === 'promptModal' || event.type === 'click') {
        document.getElementById('promptModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
        window.currentModalPromptId = null;
    }
}

// Copy prompt to clipboard
function copyPrompt(promptId) {
    const prompt = currentPrompts.find(p => p.id === promptId);
    if (!prompt) return;

    navigator.clipboard.writeText(prompt.content).then(() => {
        showCopyToast();
    });
}

// Copy prompt from modal
function copyPromptFromModal() {
    if (!window.currentModalPromptId) return;
    copyPrompt(window.currentModalPromptId);
}

// Show copy success toast
function showCopyToast() {
    const toast = document.getElementById('copyToast');
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}
