import Head from 'next/head';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        console.log('Home');
    }, []);

    return (
        <div className="Settings">
            <Head>
                <title>Waeve - Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>Workspaces</h1>
                <div class="h-40 flex items-center">
                    ...
                </div>
            </div>
        </div>
    );
}
export default Home;
