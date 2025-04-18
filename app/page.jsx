'use client';

import Header from '@/components/header/Header';
import TeamRadioPlayer from '@/components/teamRadio/TeamRadio';
import { WebSocketProvider } from '@/context/WebSocketContext';
import { pageStyle } from '@/style/style';
import Menu from '@/components/menu/Menu';
import { useState } from 'react';
import { ActiveViewType } from '@/utils/activeViewType';
import Intervals from '@/components/intervals/Intervals';
import Positions from '@/components/positions/Positions';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const [activeView, setActiveView] = useState(ActiveViewType.POSITIONS);

  const renderView = () => {
    switch (activeView) {
      case ActiveViewType.POSITIONS:
        return <Positions />;

      case ActiveViewType.INTERVALS:
        return <Intervals />;

      case ActiveViewType.TEAM_RADIO:
        return <TeamRadioPlayer />;
    }
  };

  return (
    <WebSocketProvider>
      <div className={pageStyle}>
        <Header />
        <Menu
          activeView={activeView}
          setActiveView={setActiveView}
        />
        <div className='flex-1'>{renderView()}</div>
        <Footer />
      </div>
    </WebSocketProvider>
  );
}
