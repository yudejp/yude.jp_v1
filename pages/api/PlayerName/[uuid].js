// React
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const getName = async (props) => {
  const uuid = props;
  return fetch('https://api.ashcon.app/mojang/v2/user/' + uuid);
};

const RawPlayerName = async (req, res) => {
    const { uuid } = req.query
    const response = await getName(uuid);
    const data = await response.json();
    if (response.status === 204 || response.status > 400) {
      return res.status(200).send("読み込み中...");
    }
    const username = data.username;
    return res.status(200).json({
      username,
    });
};

export default RawPlayerName