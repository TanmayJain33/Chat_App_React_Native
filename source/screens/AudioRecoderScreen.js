import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import COLORS from '../utilities/colors';
import CommonButton from '../components/commonButton';

export default function AudioRecoderScreen() {
  const [recordSecs, setRecordSec] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');

  const audioRecorderPlayer = new AudioRecorderPlayer();
  audioRecorderPlayer.setSubscriptionDuration(0.1);

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordSec(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      return;
    });
    console.log(result);
  };

  const onStopRecord = useCallback(async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSec(0);
    console.log(result);
  }, []);

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition == e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
      }
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    });
    return;
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = async () => {
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.black,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: COLORS.white, fontSize: 24}}>{recordTime}</Text>
      <CommonButton
        title="RECORD"
        white
        style={{width: '60%'}}
        onPress={onStartRecord}
      />
      <CommonButton
        title="STOP"
        black
        style={{width: '60%'}}
        onPress={onStopRecord}
      />
      <View
        style={{
          marginVertical: 10,
          borderBottomColor: COLORS.lightGreen,
          borderBottomWidth: 1,
          width: '100%',
        }}
      />
      <Text style={{color: COLORS.white, fontSize: 24}}>
        {playTime} / {duration}
      </Text>
      <CommonButton
        title="PLAY"
        white
        style={{width: '60%'}}
        onPress={onStartPlay}
      />
      <CommonButton
        title="PAUSE"
        white
        style={{width: '60%'}}
        onPress={onPausePlay}
      />
      <CommonButton
        title="STOP"
        black
        style={{width: '60%'}}
        onPress={onStopPlay}
      />
    </View>
  );
}
