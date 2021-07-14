const App = () => {
    return React.createElement('div', {}, React.createElement('h2', {}, "Hello world using react"))
}

ReactDOM.render(React.createElement(App), document.getElementById('hello'))

// ReactDom.render() has 2 arguments:
// 1. what is the content that u want to render
// 2. where do u want to render the content

// return React.createElement(1, 2, 3) :
// 1 - name of the element that u want to create
// 2 - {} - for adding a class or id to the created element for styling or for adding certain event listeners like onclick, etc
// 3 - the actual content that u want to print in the created element