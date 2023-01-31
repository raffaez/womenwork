import { Grid, Box, Link, Typography } from '@mui/material';
import './About.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
      document.title = 'Sobre nós — WomenWork';
    }, []);
    
    return (
        <>
            <Grid container justifyContent='center'>

                <Grid item xs={12} sm={12} className='titulo'>
                    <Typography variant='h2' className='title-poppins no-selection'>Sobre nós</Typography>
                </Grid>



                <Grid container item className='container-center no-selection' lg={12} xs={12} sm={6}>
                    <Grid item lg={6} xs={6} sm={6}>
                        <img style={{ width: '60%' }} className='padding-left' src='/assets/images/about/about1.svg' alt='' />
                    </Grid>

                    <Grid item lg={6} xs={10} sm={6}>
                        <Typography variant='h5' className='title-poppins mb-text padding-right no-selection'>Quem somos</Typography>
                        <Typography variant='subtitle1'> WomenWork oferece cursos que irão especializar
                            mulheres que desejam crescer no mercado de trabalho conforme a
                            necessidade de cada uma. Nosso objetivo é integrar o máximo de mulheres
                            possíveis dentro desse ambiente.</Typography>
                    </Grid>
                </Grid>



                <Grid container item className='container-center padding-left no-selection' lg={12} xs={12} sm={6}>
                    <Grid item xs={10} lg={6} sm={6}>
                        <Typography variant='h5' className='title-poppins mb-text'>Nossa missão</Typography>
                        <Typography variant='subtitle1'>Promover e contribuir para o desenvolvimento profissional através
                            da educação e do trabalho alcançando o máximo de mulheres do Brasil e exterior.
                        </Typography>
                    </Grid>
                    <Grid item className='container-center' xs={6} lg={6} sm={6}>

                        <img style={{ width: '70%' }} className='padding-left' src='/assets/images/about/about2.svg' alt='' />

                    </Grid>
                </Grid>



                <Grid container item className='container-center no-selection ' lg={12} xs={12} sm={6}>
                    <Grid item xs={6} lg={6} sm={6}>
                        <img style={{ width: '70%' }} className='padding-left' src='/assets/images/about/about4.svg' alt='' />
                    </Grid>
                    <Grid item xs={10} lg={6} sm={6} className='no-selection'>
                        <Typography variant='h5' className='title-poppins mb-text'>Visão</Typography>
                        <Typography variant='subtitle1'>Planejamos estar entre as melhores e mais respeitadas
                            plataformas desse segmento por oferecer de forma consistente cursos que irão inovar e agregar a vida de muitas brasileiras em suas carreiras profissionais.</Typography>
                    </Grid>
                </Grid>





                <Grid container item className='container-center padding-left no-selection' lg={12} xs={12} sm={6}>
                    <Grid item xs={10} lg={6} sm={6}>
                        <Typography variant='h5' className='title-poppins mb-text'>Valores</Typography>
                        <Typography variant='subtitle1' className='no-selection'> Melhoria contínua dos produtos e a qualidade para
                            atender às necessidades das clientes.
                            Prezamos por igualdade, respeito, confiança, humildade e integridade.</Typography>
                    </Grid>

                    <Grid item className='container-center no-selection' xs={6} lg={6} sm={6} >
                        <img className='mudarcel' style={{ width: '70%' }} src='/assets/images/about/about5.svg' alt='' />
                    </Grid>
                </Grid>
            </Grid>



            <Grid container className='grid-container '>
                <Grid item container xs={12} sm={12} justifyContent='center' className='p'>
                    <Typography variant='h3' className='title-poppins no-selection'>Membros</Typography>
                </Grid>
                <Grid item container xs={12} sm={12} className="membros" >
                    <Box className='flip-card no-selection'>
                        <Box className='flip-card-inner'>
                            <Box className='flip-card-front'>
                                <img className='img' src="https://camo.githubusercontent.com/936ef44bd12c340ed7a7a11f7c3053c42e004903b7a4ae11bf6e8da09c7958c1/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f4334443033415146327a6e7970796250774b512f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313636303932333031343430373f653d3136373532393630303026763d6265746126743d3257756874706e4a6c48583332614b745137356c6d386a75334f3573556e567633645f706a757430384741" alt="img" />
                            </Box>
                            <Box className='flip-card-back' >
                                <Link href="https://www.linkedin.com/in/carlos-eduardo-996b4421a/" target="_blank">
                                    <LinkedInIcon className='icons' fontSize='large' />
                                </Link>
                                <Link href="https://github.com/Santozcl" target="_blank">
                                    <GitHubIcon className='icons' fontSize='large' />
                                </Link>
                            </Box>
                        </Box>
                        <Typography className='title-poppins pad-top-text'>Carlos Eduardo</Typography>
                    </Box>

                    <Box className='flip-card no-selection'>
                        <Box className='flip-card-inner'>
                            <Box className='flip-card-front'>
                                <img className='img' src="https://camo.githubusercontent.com/3668f04d4842b7cdca2b50e0b0abf90c42b5f34633277be8806febe3a347a592/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f43344430334151474c473649557873313468672f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313635323131343536313034353f653d3136373532393630303026763d6265746126743d504e446f4f3245485872356d6f6336396853745f764a58626477577573335a664e577271327970536e4c6b" alt="img" />
                            </Box>
                            <Box className='flip-card-back' >
                                <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-estevam-82ba85207/" target="_blank">
                                    <LinkedInIcon className='icons' fontSize='large' />
                                </Link>
                                <Link href="https://github.com/Najmate" target="_blank">
                                    <GitHubIcon className='icons' fontSize='large' />
                                </Link>
                            </Box>
                        </Box>
                        <Typography className='title-poppins pad-top-text'>João Vitor</Typography>
                    </Box>

                    <Box className='flip-card no-selection'>
                        <Box className='flip-card-inner'>
                            <Box className='flip-card-front'>
                                <img className='img' src="https://media.licdn.com/dms/image/D4D03AQHsxjFl9weWBQ/profile-displayphoto-shrink_400_400/0/1675196750994?e=1680739200&v=beta&t=4J7QAHkRwFbkDwNtnBRMNyPAMJvRzf2kdEquKDrhncg" alt="img" />
                            </Box>
                            <Box className='flip-card-back' >
                                <Link href="https://www.linkedin.com/in/victordnf/" target="_blank">
                                    <LinkedInIcon className='icons' fontSize='large' />
                                </Link>
                                <Link href="https://github.com/victordnf" target="_blank">
                                    <GitHubIcon className='icons' fontSize='large' />
                                </Link>
                            </Box>
                        </Box>
                        <Typography className='title-poppins pad-top-text'>Victor França</Typography>
                    </Box>

                    <Box className='flip-card no-selection'>
                        <Box className='flip-card-inner'>
                            <Box className='flip-card-front'>
                                <img className='img' src='https://camo.githubusercontent.com/90a553cf7922491794c70f7b6025af0109d4177d5148c2f7be16518606771137/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f443444303341514641544c782d3664426833672f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313636393135323132333932373f653d3136373532393630303026763d6265746126743d67396c70525a5f5f4a41715347677a51726337756c6a367531553833727977485334596f742d4446555830' alt="img" />
                            </Box>
                            <Box className='flip-card-back' >
                                <Link href="https://www.linkedin.com/in/rafaele-souza/" target='_blank'>
                                    <LinkedInIcon className='icons' fontSize='large' />
                                </Link>
                                <Link href="https://github.com/raffaez/" target="_blank">
                                    <GitHubIcon className='icons' fontSize='large' />
                                </Link>
                            </Box>
                        </Box>

                        <Typography className='title-poppins pad-top-text' >Rafaele Souza</Typography>
                    </Box>

                    <Box className='flip-card no-selection'>
                        <Box className='flip-card-inner'>
                            <Box className='flip-card-front'>
                                <img className='img' src='https://camo.githubusercontent.com/d6187edfed61b1157fbdfffc0909f29a5e6f9f741eecc95da4779e95960fb0ab/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f44344430334151476f765867464939515f2d512f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313636333333303931363139373f653d3136373532393630303026763d6265746126743d55614c395573533644555a51326862544c514347417659635a517a66346a4b4f4c45436e6e724d33477177' alt="img" />
                            </Box>
                            <Box className='flip-card-back' >
                                <Link href="https://www.linkedin.com/in/henrique-oliveira-137b1423a/" target="_blank">
                                    <LinkedInIcon className='icons' fontSize='large' />
                                </Link>
                                <Link href="https://github.com/xHenrique22" target="_blank">
                                    <GitHubIcon className='icons' fontSize='large' />
                                </Link>
                            </Box>
                        </Box>
                        <Typography className='title-poppins pad-top-text'>Henrique O.</Typography>
                    </Box>

                    <Box className='flip-card no-selection'>
                        <Box className='flip-card-inner'>
                            <Box className='flip-card-front'>
                                <img className='img' src="https://camo.githubusercontent.com/8bfda2b7b91307dff812c7423374fb80c8db15d8c744be92eec9577176690c15/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f4335363033415145324d4b63743077677a59512f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313634383135343839333733343f653d3136373532393630303026763d6265746126743d3873534a35376b62744967772d4e324a6c35393253347a6a314b564779794733387465676e5553314a766b" alt="img" />
                            </Box>
                            <Box className='flip-card-back' >
                                <Link href="https://www.linkedin.com/in/juliocgcj/" target="_blank">
                                    <LinkedInIcon className='icons' fontSize='large' />
                                </Link>
                                <Link href="https://github.com/Juliojnr" target="_blank">
                                    <GitHubIcon className='icons' fontSize='large' />
                                </Link>
                            </Box>
                        </Box>
                        <Typography className='title-poppins pad-top-text'>Julio Cesar</Typography>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}
export default About