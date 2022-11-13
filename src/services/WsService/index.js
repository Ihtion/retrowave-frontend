import { Manager } from 'socket.io-client';

import { SERVER_HOST } from '@/constants';

export class WsService {
  _socket = null;
  _userID = null;
  _roomID = null;

  constructor(userID, roomID) {
    const manager = new Manager(SERVER_HOST);

    this._userID = userID;
    this._roomID = roomID;
    this._socket = manager.socket('/');
  }

  disconnect() {
    this._socket.disconnect();
  }

  onConnect(callback) {
    this._socket.on('connect', (...args) => {
      this._socket.emit('joinRoom', {
        userID: this._userID,
        roomID: this._roomID,
      });

      if (typeof callback === 'function') {
        callback(...args);
      }
    });
  }

  onUserJoin(callback) {
    this._socket.on('userJoin', (...args) => {
      if (typeof callback === 'function') {
        callback(...args);
      }
    });
  }

  onUserLeave(callback) {
    this._socket.on('userLeave', (...args) => {
      if (typeof callback === 'function') {
        callback(...args);
      }
    });
  }
}
