/* import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle'; */

import Content from '@/components/Content/Content';
import SideBar from '@/components/SideBar/SideBar';
import '../App.css';

export function HomePage() {
  return (
    <div className="wrapper">
      <SideBar />
      <Content />
    </div>
  );
}
