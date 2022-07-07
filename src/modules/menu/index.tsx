import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/dashboard';

import Menu from './views/Menu';

function Modules(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </Layout>
  );
}

export default Modules;