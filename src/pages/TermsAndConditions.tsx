import images from "../utils/images";
import { Section, Content, Heading } from "../components/Documents";

const TermsAndConditions = () => {
  return (
    <div className="w-full space-y-7 tracking-wider">
      <img
        src={images.tc2}
        alt="privacy policy"
        className="w-full h-64 object-cover rounded-md shadom "
      />

      <h1 className="text-center lg:text-5xl text-3xl font-black tracking-wide text-gray-100">
        Terms & Conditions
      </h1>

      <div className="mx-auto max-w-2xl space-y-5 px-5">
        <Section>
          <Content className="font-bold">Effective Date: 2025</Content>
          <Content>
            Welcome to CampusX. By accessing or using our mobile
            application, you agree to comply with and be bound by the following
            Terms and Conditions. If you do not agree to these terms, please do
            not use our services.
          </Content>
        </Section>

        <Section>
          <Heading>1. Introduction</Heading>
          <div>
            <Content>
              CampusX ("we," "our," or "us") is a mobile application
              developed and operated in Jaipur, Rajasthan, India. These Terms
              and Conditions govern your use of the CampusX app and its
              services.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>2. Account Registration</Heading>
          <div>
            <Content>
              You must create an account to access certain features. You agree
              to provide accurate and complete information You are responsible
              for maintaining the confidentiality of your account.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>3. User Content</Heading>
          <div>
            <Content>You may upload content including text and images.</Content>
            <Content>
              You retain ownership of your content, but by uploading it, you
              grant CampusX a non-exclusive, royalty-free license to use,
              display, and distribute it within the app.
            </Content>
            <Content>You may edit or delete your content at any time.</Content>
          </div>
        </Section>

        <Section>
          <Heading>4. Data Deletion</Heading>
          <div>
            <Content>
              You may delete your account at any time from within the app.
            </Content>
            <Content>
              Upon deletion, all your associated data will be permanently
              removed from our servers.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>5. Intellectual Property</Heading>
          <div>
            <Content>
              All content provided by CampusX (including logo, design,
              visuals, and trademarks) is our exclusive property. Users may not
              copy, reproduce, or distribute any CampusX-exclusive content
              without prior written permission.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>6. Feedback</Heading>
          <div>
            <Content>
              Any feedback or suggestions you provide may be used by us without
              compensation or credit. We may implement, modify, or use your
              suggestions as we see fit.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>7. Payments & Subscriptions</Heading>
          <div>
            <Content>
              CampusX is currently a free service. There are no subscription
              services, in-app purchases, or paid features as of now.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>8. Limitations of Use</Heading>
          <div>
            <Content>
              Users may not use the app for unlawful or prohibited activities.
              You agree not to upload harmful, abusive, or offensive content. If
              used for these purposes, Users will be liable for any type of
              lawful action.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>9. Termination</Heading>
          <div>
            <Content>
              We reserve the right to suspend or terminate your access if you
              violate these Terms. Termination may result in deletion of all
              associated data and content.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>10. Contact Information</Heading>
          <div>
            <Content>
              For questions or concerns regarding these Terms, contact us at:
              Email:{" "}
              <a href="mailto:biz.kartikey@gmail.com" className="text-white">
                biz.kartikey@gmail.com
              </a>
            </Content>
            <Content>
              For copyright or infringement notices, contact: Copyright Agent:{" "}
              <a href="mailto:biz.kartikey@gmail.com" className="text-white">
                biz.kartikey@gmail.com
              </a>
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>11. Changes to Terms</Heading>
          <div>
            <Content>
              We may modify these Terms at any time. Users will be notified via
              the app or email of significant changes. Continued use of the app
              after changes implies acceptance of the updated Terms.
            </Content>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
