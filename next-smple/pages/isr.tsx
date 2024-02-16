import { GetStaticPaths, NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const { message } = props
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
                <main>
                    <p>이 페이지는 ISR을 통해 빌드 시 생성된 페이지</p>
                    <p>{message}</p>
                </main>
            </Head>
        </div>
    );
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}에 이 페이지의 getServerSideProps가 실행됨`

    return {
        props: {
            message,
        },
        revalidate: 60
    }
}

export default ISR