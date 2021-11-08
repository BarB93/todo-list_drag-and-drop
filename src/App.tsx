import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { TodoItemsList } from './components/TodoItems';
import TodoItemForm from './components/TodoItemForm';
import {TodoContextProvider} from './context/TodoContext'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9012fe',
        },
        secondary: {
            main: '#b2aabf',
        },
    },
});

function App() {
    return (
        <TodoContextProvider>
            <ThemeProvider theme={theme}>
                <Content />
            </ThemeProvider>
        </TodoContextProvider>
    );
}

function Content() {
    return (
        <Container maxWidth="sm">
            <header>
                <Typography variant="h2" component="h1">
                    Todo List
                </Typography>
            </header>
            <main>
                <TodoItemForm />
                <TodoItemsList />
            </main>
        </Container>
    );
}

export default App;
