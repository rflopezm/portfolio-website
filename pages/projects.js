import Head from 'next/head';
import { getMainMenu } from '../utils/getMainMenu';
import { withPageLayout } from '../utils/withPageLayout';
import { query } from '../utils/query';
import { getImageUrl } from '../utils/getImageUrl';
import ProjectGrid from '../components/Projects/ProjectGrid';

function Work({ projects }) {
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
            <h1 className="text-4xl font-bold">Some of my projects</h1>
            <div className="flex flex-row text-2xl text-center justify-center items-center">
              <h5>Built with passion and cool technologies</h5>&nbsp;
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <ProjectGrid projects={projects}></ProjectGrid>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const menus = await getMainMenu();
  const profile = await query('/profile');
  const portfolio = await query('/projects');
  const projects = portfolio.projects.map(item => {
    const { project } = item;
    const { id, title, description, href, techs, image } = project;
    const src = image ? getImageUrl(image) : null;
    return { id, title, description, href, techs, src }
  });
  return {
    props: { profile, projects, menus },
  };
}

export default withPageLayout(Work, 'light');
