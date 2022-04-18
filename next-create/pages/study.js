import { withRouter } from 'next/router';
import Link from 'next/link';

const Study = ({router}) => {
    return (
        <>
            <div>学习{router.query.name}</div>
            <Link href='/'><a>返回首页</a></Link>
        </>
    )
}
export default withRouter(Study)

