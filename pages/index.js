import Head from 'next/head';
import { getMainMenu } from '../utils/getMainMenu';
import { withPageLayout } from '../utils/withPageLayout';
import { query } from '../utils/query';
import Title from '../components/Title';
import Skill from '../components/Skill';
import BorderButton from '../components/BorderButton';

function Home({ profile }) {
  const skills = (profile && profile.skills) || [];
  const resumeHref = (profile && profile.resume && profile.resume.url) || null;
  return (
    <>
      <Head>
        <title>
          {profile.name} - {profile.title}
        </title>
        <meta name="description" content={profile.profile} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="w-full flex flex-col font-main">
        <div className="flex bg-primary items-center h-40h justify-center text-white px-10 py-10">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Hello</h1>
            <div className="flex flex-row text-2xl text-center justify-center items-center">
              <h5>I Am a </h5>&nbsp;
              <h5 className="font-thin py-2">{profile.title}</h5>
            </div>
          </div>
        </div>
        <div className="flex h-30h flex-row">
          <div className="w-1/3 flex flex-col py-10 px-10">
            {/* <Title>My tech stack</Title> */}
            {skills.map((skill) => (
              <Skill key={skill.id} {...skill}></Skill>
            ))}
          </div>
          <div className="w-2/3 py-10">
            <Title className="text-primary">About Me.</Title>
            <p className="text-justify pr-20">{profile.profile}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <BorderButton
            className="hover:bg-primary border-primary text-primary hover:text-white"
            download={true}
            href={resumeHref}
            title="Download Resume"
          ></BorderButton>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const profile = await query('/profile');
  const menus = await getMainMenu();
  return {
    props: { profile, menus },
  };
}

export default withPageLayout(Home, 'light');
