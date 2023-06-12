import React from "react"

export type Endpoint<T extends Object = any> = {
    Component: (props: T) => React.ReactNode,
    path: `/${string}`
}