import { useContext } from 'react'
import { GlobalStore } from '../store'
export default function StateTest() {
  const context = useContext(GlobalStore)
  return (
    <div>
      Comp Three: { context.blog.counter }
      <button onClick={() => context.dispatch('increment1')}>
        Increment
      </button>
      <button onClick={() => context.dispatch('decrement1')}>
        Decrement
      </button>
      Comp Three: { context.blog.counter2 }
      <button onClick={() => context.dispatch('increment2')}>
        Increment
      </button>
      <button onClick={() => context.dispatch('decrement2')}>
        Decrement
      </button>
    </div>
  )
}
