# TodoList with Drag&Drop

**deployed app**: *[TodoList link](https://barb93.github.io/todo-list_drag-and-drop/)*

## Сделанные пункты
- начал с  декомпозиции кода, из основного это файл TodoItemsContext.tsx был перегружен функционалом, постарался разделить, сделать более single responsibility
- типы экшенов переписал с помощью  enum
- **T2. Типизация.**  избавился от any в интерфейсе TodoItemsAction
- **F1. Приоритеты.** добавил Drag&Drop для активных тудушек (react-beautiful-dnd)
- Немного изменил стейт, разбил todoItems на два массива активные и выполненные задачи, посчитал так будет удобней следить за приоритетом без создания дополнительных свойств в тудушке 
- **T3. Иммутабельность.** перевел код редуктора на ImmerJS
- **T1. Форматирование кода** подключил Prettier и настроил pre-commit hook (с помощью husky)
- createMuiTheme deprecated заменил на createTheme

## Используемый стек

- TypeScript
- React
- Material-UI
- Framer Motion
