const grid = document.querySelector('.recipe-grid');
const modal = document.getElementById('recipe-modal');
const close = document.querySelector('.close');

function renderRecipes(filter = '', category = '') {
    grid.innerHTML = '';
    recipes
        .filter(r => r.title.toLowerCase().includes(filter.toLowerCase()) && (!category || r.category === category))
        .forEach(r => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            card.innerHTML = `<h3>${r.title}</h3><p>${r.desc}</p>`;
            card.addEventListener('click', () => {
                document.getElementById('modal-title').textContent = r.title;
                document.getElementById('modal-desc').textContent = r.desc;
                document.getElementById('modal-ingredients').innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
                document.getElementById('modal-steps').innerHTML = r.steps.map(s => `<li>${s}</li>`).join('');
                document.getElementById('calories').textContent = r.nutrition.calories;
                document.getElementById('protein').textContent = r.nutrition.protein;
                document.getElementById('carbs').textContent = r.nutrition.carbs;
                document.getElementById('fat').textContent = r.nutrition.fat;
                modal.style.display = 'block';
            });
            grid.appendChild(card);
        });
}

document.getElementById('search').addEventListener('input', (e) => renderRecipes(e.target.value, document.getElementById('category').value));
document.getElementById('category').addEventListener('change', (e) => renderRecipes(document.getElementById('search').value, e.target.value));
close.addEventListener('click', () => modal.style.display = 'none');
renderRecipes();