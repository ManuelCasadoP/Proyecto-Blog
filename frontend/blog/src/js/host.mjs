
let host;

switch (window.location.hostname) {
    case "localhost":
        host="http://localhost:4000/"
        break;

    case "127.0.0.1":
        host="http://127.0.0.1:4000/"
        break;
        
    default:
        host="/"
        break;
}

export default host