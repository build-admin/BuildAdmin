interface Window {
    existLoading: boolean
    lazy: NodeJS.Timer
    unique: number
}

interface FormItemProps {
    name: string
    title: string
    value: any
    type: string
    content: any
    tip: string
    rule: any
}

interface anyObj {
    [key: string]: any
}

interface TableDefaultData<T = any> {
    list: T
    remark: string
    total: number
}

interface ApiResponse<T = any> {
    code: number
    data: T
    msg: string
    time: number
}

interface ApiPromise<T = any> extends Promise<ApiResponse<T>> {}
