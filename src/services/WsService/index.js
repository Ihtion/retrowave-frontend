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

    this._registerConnectHandling();
    this._registerUserJoinHandling();
  }

  disconnect() {
    this._socket.disconnect();
  }

  _registerConnectHandling() {
    this._socket.on('connect', () => {
      this._socket.emit('joinRoom', {
        userID: this._userID,
        roomID: this._roomID,
      });
    });
  }

  _registerUserJoinHandling() {
    this._socket.on('userJoin', (...args) => {
      console.log('userJoin from ' + SERVER_HOST);
      console.log(args);
    });
  }
}
