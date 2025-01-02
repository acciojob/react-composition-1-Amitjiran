
import React, { useState } from 'react';

function Tabs({ tabs }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0); // State to track the active tab
    return (
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button key={index}
                        onClick={() => setActiveTabIndex(index)}>

                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Render the content of the active tab */}
            <div>
                {tabs[activeTabIndex].content}
            </div>
        </div>
    );
}

export default Tabs;
