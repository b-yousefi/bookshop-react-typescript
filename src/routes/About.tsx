import React from "react";
import {
  Grid,
  Box,
  Avatar,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Link,
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Mail as MailIcon,
} from "@material-ui/icons";
import pic from "../resources/images/BehnazYousefi.jpg";

export const AboutPage: React.FC = () => {
  return (
    <Grid container spacing={1} justify={"center"}>
      <Grid item xs={12} md={8}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#5f26b5", color: "white" }}
          >
            <Typography style={{ color: "white" }}>
              About the website
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box flexDirection={"column"}>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                Last summer, I threw caution to the wind and quit my job to
                pursue my dream, which is finding a job abroad. I was called
                ambitious and in some severe cases a fool to let go of my job
                without finding another position. I studied English for four
                months and took the IELTS exam in January and got 8 in overall.
                I had just started applying for jobs abroad when the pandemic
                hit the world and I watched in horror that one by one countries
                shut down their borders! It was like a nightmare and for quite
                some time I was confused and couldn’t see beyond a day. I just
                wanted to stay healthy and survive the disease. After two
                months, I said that enough is enough. I couldn’t take the
                feeling of uselessness anymore. Therefore, I started learning
                new frameworks and refreshing my knowledge by studying books and
                taking part in programming contests. I tried to keep myself
                occupied; however, after some time I realized that knowledge
                without practice doesn’t worth that much, as a result, I decided
                to work on an imaginary project and that’s how Bookshop was born
                <span role={"img"} aria-label={"happy"}>
                  {" "}
                  &#128522;
                </span>
              </Typography>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                Bookshop is an online bookstore with features to show and filter
                books, sign up new users and ordering books. Although the
                website might seem rudimentary, I tried to use the hottest
                frameworks and best practices while developing it, I learned a
                lot during the process and encountered many challenges while
                coding such as security, testing and designing an efficient,
                responsive and attractive UI. It was a rather long journey that
                I enjoyed every second of it.
              </Typography>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                I put the source code of the project in my Github account at{" "}
                <Link href={"https://github.com/b-yousefi"}>
                  https://github.com/b-yousefi
                </Link>
                .
              </Typography>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                I hope you find the final result satisfactory and call me
                <span role={"img"} aria-label={"wink"}>
                  {" "}
                  &#128521;
                </span>
                As always, I am looking for new challenges.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={8}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#0e8205", color: "white" }}
          >
            <Typography style={{ color: "white" }}>About me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box flexDirection={"column"}>
              <Avatar
                alt="Behnaz Yousefi"
                src={pic}
                style={{ height: 120, width: 120 }}
              />

              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ alignSelf: "center" }}
              >
                My name is Behnaz Yousefi. I am a software engineer who enjoys
                coding immensely. Programming is not only my occupation but also
                my passion.
              </Typography>

              <Typography variant={"body1"} align={"justify"}>
                I love learning new technologies and even the old ones
                <span role={"img"} aria-label={"glasses"}>
                  &#129299;
                </span>
                In general, I like learning and cracking new problems. It makes
                me feel unstoppable and powerful.
              </Typography>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                Aside from programming, I love baking! I feel calm and collected
                while baking. I also enjoy reading and watching movies. I
                believe, they give us the opportunity to experience new things
                and broaden our horizon by showing us different aspects of life.
                Unfortunately, life is short. Therefore, we cannot experience
                everything on our own. In addition, some stories are too dark
                and unpleasant that no one wishes to experience them in person.
                Nevertheless, they are valuable since life is not all rainbow
                and sunshine. We need to learn how to cope with difficulties,
                how to see past the misery and be positive.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={8}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#a80c5f", color: "white" }}
          >
            <Typography style={{ color: "white" }}>
              My Programming Journey
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box flexDirection={"column"}>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                I was introduced to the world of programming by C++ at
                university, but rather than that I have learned every language
                and framework I know of today all by myself and of course with
                the help of the Internet. At the second year of university I was
                fascinated by the beauty of the Internet and studied HTML,
                JavaScript and CSS, actually I managed to develop my first
                website that year. After that I turned to C# since it was
                required of us to develop a desktop program as one of our course
                projects. Meanwhile, I learned WPF to make a more impressive UI.
                Afterwards, I came upon ASP.net MVC and learned how to code in a
                multi-tier framework.
              </Typography>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                While studying master, I was eager to see the benefit of my
                research in practice. Therefore, I developed a tool, wRebeca,
                for modeling and verification of protocols in static and dynamic
                networks. Since referees of our paper were constantly
                complaining of inaccessibility to a windows operating system to
                execute the program, I learned Java to convert my master thesis
                project from C# to Java. However, it was just the beginning of a
                very long journey of learning the concept of Servlets, Spring
                Boot, Spring MVC, and finally android programming. I worked more
                than one year as an android programmer and learned so much about
                frontend programming and its challenges, such as the importance
                of UX. In addition, we developed a server-side application to
                regulate our request to the core in which we had to consider
                both backward and forward compatibility, which proved to be
                difficult at times.
              </Typography>
              <Typography
                variant={"body1"}
                align={"justify"}
                style={{ padding: 5 }}
              >
                Another chapter in my programming life started when I took on a
                job as a mainframe developer where the sophisticated IDE, i.e.,
                IntelliJ IDEA, was replaced by a dull emulator in which you
                couldn't even scroll let alone use a short-key. Despite the
                challenges, I loved my job since It gave me the opportunity to
                work directly with database. Furthermore, I learned a lot about
                loan systems and accounting concepts and got to design and
                develop various complicated services that would run on thousands
                of loan accounts. It is needless to say that the standard was
                high and any mistake could cause a catastrophe. Moreover, I took
                the predicament presented by working with the out-of-date
                emulator as an opportunity and developed a program, namely
                Coboli, to replace it. Although it is a work in progress and has
                a long way to perfection, I do believe anything that can make
                the life of even one person a bit easier is worth the effort.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12} md={8}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#f57607", color: "white" }}
          >
            <Typography style={{ color: "white" }}>Contact</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item xs={2} md={1}>
                <IconButton
                  edge="start"
                  color="primary"
                  aria-label="menu"
                  href={"https://www.linkedin.com/in/behnaz-yousefi/"}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={10} md={11}>
                <Link href={"https://www.linkedin.com/in/behnaz-yousefi/"}>
                  https://www.linkedin.com/in/behnaz-yousefi/
                </Link>
              </Grid>
              <Grid item xs={2} md={1}>
                <MailIcon color={"secondary"} fontSize="large" />
              </Grid>
              <Grid item xs={10} md={11}>
                <Typography variant={"body1"}>
                  b.yousefi2911@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={2} md={1}>
                <IconButton
                  edge="start"
                  aria-label="menu"
                  href={"https://github.com/b-yousefi"}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={10} md={11}>
                <Link href={"https://github.com/b-yousefi"}>
                  https://github.com/b-yousefi
                </Link>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
