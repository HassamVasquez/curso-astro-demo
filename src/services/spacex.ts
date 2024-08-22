import { type APISpaceXResponse, type Doc } from '../types/api'

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc"
                },
                limit: 12
            }
        })
    })

    const { docs: launches } = await res.json() as APISpaceXResponse
    return launches
}

export const getLatestLaunchBy = async ({ id }: { id: string }) => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/${id}', {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc"
                },
                limit: 12
            }
        })
    })

    const launch = await res.json() as Doc
    return launch
}