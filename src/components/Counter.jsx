import { useState } from 'preact/hooks'

export function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <span>{counter}</span>
            <button class="border px-4 py-2 tex-xl" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button class="border px-4 py-2 tex-xl" onClick={() => setCounter(counter => counter - 1)}>-</button>
        </>
    )
}