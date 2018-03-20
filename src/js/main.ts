import Recorder from './class/Recorder'
import Reset from './class/Reset'
import Copy from './class/Copy'

const recorder = new Recorder()
recorder.init()

const reset = new Reset(recorder)
reset.init()

const copy = new Copy(recorder)
copy.init()
