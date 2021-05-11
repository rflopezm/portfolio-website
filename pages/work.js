import Head from 'next/head';
import { getMainMenu } from '../utils/getMainMenu';
import { withPageLayout } from '../utils/withPageLayout';
import { query } from '../utils/query';
import Title from '../components/Title';
import Skill from '../components/Skill';
import BorderButton from '../components/BorderButton';

function Work() {
  return (
    <>
      <Head>
        <title></title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="w-full flex flex-col font-main">
        <div className="flex bg-primary items-center justify-center text-white px-10 py-10">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">My work</h1>
            <div className="flex flex-row text-2xl text-center justify-center items-center">
              <h5>Web and mobile apps built</h5>&nbsp;
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-2/3 py-10">
            <Title>About Me.</Title>
          </div>
        </div>
        <div className="flex flex-row">
          <BorderButton
            className="hover:bg-primary hover:text-white"
            download={true}
            title="Download Resume"
          ></BorderButton>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const menus = await getMainMenu();
  const profile = await query('/profile');
  return {
    props: { profile, menus },
  };
}

export default withPageLayout(Work, 'light');
