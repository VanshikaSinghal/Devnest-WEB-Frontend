const App = () => {
    return React.createElement('div', {}, React.createElement('h2', {}, "Hello world using react"))
}

ReactDOM.render(React.createElement(App), document.getElementById('hello'))