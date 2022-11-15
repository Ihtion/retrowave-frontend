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
        callback({ ...args, socketID: this._socket.id });
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

  onVotingStart(callback) {
    this._socket.on('votingStart', (...args) => {
      if (typeof callback === 'function') {
        callback(...args);
      }
    });
  }

  onVotingFinish(callback) {
    this._socket.on('votingFinish', (...args) => {
      if (typeof callback === 'function') {
        callback(...args);
      }
    });
  }

  onSessionData(callback) {
    this._socket.on('sessionData', (...args) => {
      if (typeof callback === 'function') {
        callback(...args);
      }
    });
  }

  onEstimation(callback) {
    this._socket.on('estimation', (...args) => {
      if (typeof callback === 'function') {
        callback(...args);
      }
    });
  }

  emitVotingStart() {
    this._socket.emit('votingStart');
  }

  emitVotingFinish() {
    this._socket.emit('votingFinish');
  }

  emitEstimation(estimation) {
    this._socket.emit('estimation', estimation);
  }
}
