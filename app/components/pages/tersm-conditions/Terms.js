"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";

const tabList = [
  "Terms and Conditions",
  // "Our Terms",
  // "Conditions",
  // "your Privacy",
  // "Information We Collect",
];
const TABS = [
  {
    title: "Welcome Text",
    content: (
      <div className="grids mb60">
        <h4 className="title">Terms and Conditions</h4>
        <p className="mb25">
          Welcome to CarPortal.co.in! By using our website and services, you agree to be bound by the following terms and conditions.
        </p>
        <strong>1. Introduction</strong>
        <p className="mb25">
          CarPortal.co.in is an online automotive portal that provides information, resources, and services related to buying vehicles.
        </p>
        <strong>2. Use of Website</strong>
        <p className="mb25">
          - You must be at least 18 years old to use our website.<br />
          - You agree to use our website only for lawful purposes.<br />
          {`- You agree not to disrupt, modify, or interfere with our website's functionality.`}
        </p>
        <strong>3. Content and Accuracy</strong>
        <p className="mb25">
          - We strive to provide accurate and reliable information, but we make no warranties or guarantees.<br />
          - You agree to verify information through independent sources before making decisions.
        </p>
        <strong>4. User-Generated Content</strong>
        <p className="mb25">
          - You are responsible for any content you upload or submit to our website.<br />
          - You grant us a non-exclusive license to use, reproduce, and distribute your content.
        </p>
        <strong>5. Intellectual Property</strong>
        <p className="mb25">
          - Our website and its content are protected by intellectual property laws.<br />
          - You agree not to reproduce, modify, or distribute our content without permission.
        </p>
        <strong>6. Limitation of Liability</strong>
        <p className="mb25">
          - We are not liable for any damages or losses arising from your use of our website or services.<br />
          - Our liability is limited to the maximum extent permitted by law.
        </p>
        <strong>7. Governing Law</strong>
        <p className="mb25">
          - These terms and conditions are governed by Indian law.<br />
          - Any disputes will be resolved through arbitration in accordance with Indian law.
        </p>
        <strong>8. Changes to Terms</strong>
        <p className="mb25">
          - We reserve the right to modify or update these terms and conditions at any time.<br />
          - Your continued use of our website and services constitutes acceptance of the updated terms.
        </p>
        <p className="mb0">
        By using CarPortal.co.in, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions."
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

const Terms = () => {
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

export default Terms;
