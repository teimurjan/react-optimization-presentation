const elements = [
    {type: 'div', key: 0, textContent: 'Container #0'},
    {type: 'div', key: 1, textContent: 'Container #1'},
    {type: 'div', key: 2, textContent: 'Container #2'},
    {type: 'div', key: 3, textContent: 'Container #3'},
];

// Удалим элемент под индкесом 1
const elements = [
    {type: 'div', key: 0, textContent: 'Container #0'},
    // Render будет бесполезно вызван для всех элементов ниже
    {type: 'div', key: 1, textContent: 'Container #2'}, 
    {type: 'div', key: 2, textContent: 'Container #3'},
];