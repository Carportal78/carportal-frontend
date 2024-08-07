"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";

const tabList = [
  "Privacy Policy",
  // "Our Terms",
  // "Conditions",
  // "your Privacy",
  // "Information We Collect",
];
const TABS = [
  {
    title: "Privacy Policy",
    content: (
      <div className="grids mb60">
        <h4 className="title">Privacy Policy</h4>
        <p className="mb25">
          At CarPortal.co.in, we respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and share your information.
        </p>
        <strong>1. Information We Collect</strong>
        <p className="mb25">
          - Personal Information: name, email, phone number, location, and other details provided by you<br />
          - Usage Information: browsing history, search queries, and interactions with our website<br />
          - Device Information: IP address, browser type, and device details

        </p>
        <strong>2. Use of Information</strong>
        <p className="mb25">
          - To provide and improve our services<br />
          - To respond to your inquiries and requests<br />
          - To send newsletters, updates, and promotional materials<br />
          - To analyze and enhance user experience<br />
          - To comply with legal obligations

        </p>
        <strong>3. Sharing of Information</strong>
        <p className="mb25">
          - We may share your information with:<br/>
          - Authorized dealers and manufacturers<br/>
          - Service providers and partners<br/>
          - Law enforcement agencies (if required)

        </p>
        <strong>4. Data Security</strong>
        <p className="mb25">
        - We implement reasonable security measures to protect your information<br/>
        - We use encryption and secure servers to safeguard your data
        </p>
        <strong>5. User Rights</strong>
        <p className="mb25">
        - You have the right to access, correct, or delete your personal information<br/>
        - You can opt-out of promotional communications
        </p>
        <strong>6. Cookies and Tracking</strong>
        <p className="mb25">
        - We use cookies to enhance user experience and track usage patterns<br/>
        - You can disable cookies in your browser settings
        </p>
        <strong>7. Changes to Privacy Policy</strong>
        <p className="mb25">
        - We reserve the right to update this privacy policy at any time<br/>
        - Your continued use of our website constitutes acceptance of the updated policy
        </p>
        <strong>8. Contact Us</strong>
        <p className="mb25">
        - If you have any questions or concerns, please contact us at:  <strong>info@carportal.co.in</strong>
        </p>
      </div>
    ),
  },
  {
    title: "Our Terms",
    content: (
      <div className="grids mb30">
        <h4 className="title">Our Terms</h4>
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb25">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
          hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque
          bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam
          tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a
          text link libero tempus congue.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam egestas
          sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Integer
          tristique elit lobortis purus bibendum, quis dictum metus mattis.
          Phasellus posuere felis sed eros porttitor mattis. Curabitur massa
          magna, tempor in blandit id, porta in ligula.din cursus. Ut et
          adipiscing erat. Curabitur this is a text link libero tempus congue.
        </p>
      </div>
    ),
  },
  {
    title: "Conditions",
    content: (
      <div className="grids mb60">
        <h4 className="title">Conditions</h4>{" "}
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb25">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam egestas
          sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Integer
          tristique elit lobortis purus bibendum, quis dictum metus mattis.
          Phasellus posuere felis sed eros porttitor mattis. Curabitur massa
          magna, tempor in blandit id, porta in ligula.din cursus. Ut et
          adipiscing erat. Curabitur this is a text link libero tempus congue.
        </p>
      </div>
    ),
  },
  {
    title: "Your Privacy",
    content: (
      <div className="grids mb30">
        <h4 className="title">Our Privacy</h4>
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
          hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque
          bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam
          tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a
          text link libero tempus congue.
        </p>
      </div>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <div className="grids mb30">
        <h4 className="title">Informations We Collect</h4>
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
          hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque
          bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam
          tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a
          text link libero tempus congue.
        </p>
      </div>
    ),
  },
];

const PrivatePolicy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Tabs selectedIndex={activeIndex} onSelect={handleTabClick}>
      <div className="row">
        <div className="col-md-8 col-xl-9">
          <div className="terms_condition_grid">
            {TABS?.map((tab, index) => (
              <TabPanel key={index}>{tab.content}</TabPanel>
            ))}
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-4 col-xl-3">
          <div className="terms_condition_widget">
            <div className="widget_list">
              <h5 className="title">Navigation</h5>

              <TabList className="list_details">
                {tabList?.map((item, i) => (
                  <Tab className="single-list" key={i}>
                    {item}
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  );
};

export default PrivatePolicy;
