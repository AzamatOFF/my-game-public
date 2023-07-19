import React, { useState, useEffect } from 'react';

export default function Statistics() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/statistics', { credentials: 'include' })
      .then((data) => data.json())
      .then((result) => setStats(result));
  }, []);

  return (
    <>
      <div className="statisticTitle">Статистика</div>
      <div className="discriptionGame">
        <div>Имя игрока</div>
        <div>Общий счёт</div>
      </div>
      {stats.map((el) => (
        <div className="statisticAlldiv">
          <div className="statisticName" key={el?.id}>
            {el?.name}
          </div>
          <div className="statisticScore">
            {el?.Statistic?.score}
          </div>
        </div>
      ))}
    </>
  );
}
