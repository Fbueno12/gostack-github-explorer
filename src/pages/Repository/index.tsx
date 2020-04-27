import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo-github.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/23190868?s=460&u=92f9a35df3a14cd3da55f3b1072904cb76acfb34&v=4"
            alt="teste"
          />
          <div>
            <strong>Rocketseat unvorm</strong>
            <p>testetstsadtast</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1818</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1818</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1818</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="asdfasdf">
          <div>
            <strong>asdfasdfsasdfasd</strong>
            <p>asdfasdfsdafasdf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
