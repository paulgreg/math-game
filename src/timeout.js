import { useCallback, useMemo, useState } from 'react'

// Thx Manuel ;-)
export const useTimeout = (defaultDelay = 0) => {
    const [id, setId] = useState()

    const launch = useCallback(
        (fn, delay = defaultDelay) => {
            clearTimeout(id)
            setId(setTimeout(fn, delay))
        },
        [id]
    )

    return [launch]
}
