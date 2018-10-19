import Faye from 'faye';
export default new Faye.Client('http://' + window.location.hostname + ':8000/__connect');