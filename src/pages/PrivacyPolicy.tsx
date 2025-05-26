import images from "../utils/images";
import {
  Section,
  Content,
  Heading,
  Heading2,
  ListItem,
} from "../components/Documents";

const PrivacyPolicy = () => {
  return (
    <div className="w-full space-y-7 tracking-wider">
      <img
        src={images.pp1}
        alt="privacy policy"
        className="w-full h-64 object-cover rounded-md shadom "
      />

      <h1 className="text-center lg:text-5xl text-3xl font-black tracking-wide text-gray-100">
        Privacy Policy
      </h1>

      <div className="mx-auto max-w-2xl space-y-5 px-5">
        <Section>
          <Content className="font-bold">Effective Date: 2025</Content>
          <Content>
            Your privacy is important to us. This Privacy Policy outlines how
            ThoughtsHub collects, uses, and protects your information when you
            use our mobile application.
          </Content>
        </Section>

        <Section>
          <Heading>1. Information We Collect</Heading>
          <div>
            <Heading2>Personal Information</Heading2>
            <ListItem>
              Name, email address, and educational information when you register
            </ListItem>
            <ListItem>
              Profile data you provide (e.g., interests, skills)
            </ListItem>

            <Heading2>Content</Heading2>
            <ListItem>
              Images, text, and other content you upload to the app
            </ListItem>

            <Heading2>Technical Data</Heading2>
            <ListItem>Device type, operating system, IP address</ListItem>
            <ListItem>
              Usage patterns within the app (e.g., features accessed, time
              spent)
            </ListItem>
          </div>
        </Section>

        <Section>
          <Heading>2. How We Use Your Information</Heading>
          <div>
            <ListItem>
              To personalize your experience and deliver relevant content
            </ListItem>
            <ListItem>
              To improve app functionality and user engagement
            </ListItem>
            <ListItem>
              To communicate updates and information relevant to your interests
            </ListItem>
            <ListItem>
              To enforce our Terms and ensure platform integrity
            </ListItem>
          </div>
        </Section>

        <Section>
          <Heading>3. Account and Data Deletion</Heading>
          <div>
            <Content>
              You may delete your account at any time via app settings
            </Content>
            <Content>
              Upon deletion, all personal data and uploaded content are
              permanently removed from our servers
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>4. Sharing of Information</Heading>
          <div>
            <Content>
              We do not sell or rent your personal data. We may share data with
              trusted third-party services for hosting, analytics, or technical
              support. Legal requests may require us to share limited data in
              compliance with applicable laws.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>5. Security</Heading>
          <div>
            <Content>
              We use encryption and modern security practices to protect your
              data. Access to user data is restricted to authorized personnel
              only.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>6. Children's Privacy</Heading>
          <div>
            <Content>
              Our app is intended for users aged 13 and above We do not
              knowingly collect data from children under 13.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>7. Your Rights</Heading>
          <div>
            <ListItem>Access and edit your profile at any time</ListItem>
            <ListItem>Request deletion of your account and data</ListItem>
            <Content>
              Contact us at biz.kartikey@gmail.com for any privacy concerns
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>8. Intellectual Property</Heading>
          <div>
            <Content>
              Our content, logos, design elements, and trademarks are the
              exclusive property of ThoughtsHub. Unauthorized use or
              reproduction is prohibited
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>9. Changes to This Policy</Heading>
          <div>
            <Content>
              We may update this Privacy Policy periodically. Significant
              changes will be communicated via the app or email. Continued use
              of the app implies acceptance of the revised policy.
            </Content>
          </div>
        </Section>

        <Section>
          <Heading>10. Contact</Heading>
          <div>
            <Content>
              For any questions regarding this Privacy Policy, please contact:
              Email:{" "}
              <a href="mailto:biz.kartikey@gmail.com" className="text-white">
                biz.kartikey@gmail.com
              </a>
            </Content>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
