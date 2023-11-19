import "./skeleton.css"
import { Skeleton as SkeletonMui } from '@mui/material';


export default function Skeleton({ type }) {

    const big = 4
    const small = 5
    const list = 4
    const FeedSk = () => {
        return (
            <div className="postSk">
                <div className="postSkBox"></div>
            </div>
        )
    }

    const ListSk = () => {
        return (
            <div className="listSk">
                <SkeletonMui variant="rounded" width={200} height={200} />
                <div className="listSkDetails">
                    <SkeletonMui variant="rounded" width={280} height={20} />
                    <SkeletonMui variant="rounded" width={210} height={10} />
                    <SkeletonMui variant="rounded" width={210} height={10} />
                    <SkeletonMui variant="rounded" width={210} height={10} />
                </div>
                <div className="listSkBtn">
                    <SkeletonMui variant="rounded" width={210} height={10} />
                    <SkeletonMui variant="rounded" width={210} height={10} />
                    <SkeletonMui variant="rounded" width={210} height={10} />
                </div>
            </div>
        )
    }

    if (type === 'feed') {
        return Array(big).fill(<FeedSk />)
    } else if (type === 'feedSm') {
        return Array(small).fill(<FeedSk />)
    } else if (type === 'list') {
        return Array(list).fill(<ListSk />)
    }
}
