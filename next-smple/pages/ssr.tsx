import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
                <main>
                    <p>이 페이지는 서버 사이드 랜더링을 통한 접근 시 서버에서 그려지는 페이지</p>
                    <p>{message}</p>
                </main>
            </Head>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}에 이 페이지의 getServerSideProps가 실행됨`
    console.log(message)

    return {
        props: {
            message,
        },
    }
}

export default SSR