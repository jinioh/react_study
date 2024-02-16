import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

type SSGProps = {
    message: string;
}

const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props;

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <p>이 페이지는 정적 사이트 생성을 통한 빌드 시 생성된 페이지임</p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에 getStatic Props가 실행`;
    console.log(message)
    return {
        props: {
            message,
        }
    }
}

export default SSG

