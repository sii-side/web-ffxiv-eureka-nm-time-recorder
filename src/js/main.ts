import Recorder from './class/Recorder'
import Reset from './class/Reset'
import Copy from './class/Copy'

const recorder: Recorder = new Recorder()
recorder.init()

const reset: Reset = new Reset(recorder)
reset.init()

const copy: Copy = new Copy(recorder)
copy.init()
