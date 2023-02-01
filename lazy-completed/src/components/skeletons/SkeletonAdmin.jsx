import Skeleton from "./Skeleton"

const SkeletonAdmin = () => {
    const lines = [...Array(100).keys()].map(i => {
        return <Skeleton key={i} classes="text width-100" />
    })

    return (
        <div className="skeleton-admin">
            <Skeleton classes="title width-50" />
            {lines}
        </div>
    )
}
export default SkeletonAdmin