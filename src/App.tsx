import edwardface from './assets/EDWARD.svg'
import jotaroface from './assets/jotaro.svg'
import './App.css'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Collapse, Grid, IconButton, IconButtonProps, Rating, Stack, styled, Typography } from '@mui/material'
import React from 'react';
import { purple } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return<IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({expand}) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));


function App() {
  const [expanded, setexpanded] = React.useState(false);

  const handleExpandClick = () => {
    setexpanded(!expanded);
  };

  return (
    <>
    
    <Grid container spacing={4}>
      <Grid item xs={6}>
      <Card sx={{maxWidth: 345, paddingTop: '20px'}}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500]}} aria-label='receta'>
            J
          </Avatar>
        }
        action={
          <IconButton aria-label='configuraciones'>
            <MoreVertIcon/>
          </IconButton>
        }
        title="Jotaro Kujo"
        subheader="29 de agosto, 2024"
        />
        <CardMedia
        component="img"
        height="450"
        image={jotaroface}
        alt='Paella'
        />
        <CardContent>
          <Typography variant='body2' sx={{color: 'text.secondary'}}>
            Por muchos considerado el mejor jojo, no es mi favorito pero la verdad me encanto su parte, aunque nerfearon a Joseph demasiado
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton arial-label="agregar a favoritos">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          arial-label="mostrar mas">
            <ExpandMoreIcon/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2}}>Method:</Typography>
          <Typography sx={{ marginBottom: 5}}>
          Jotaro Kujo (空条 承太郎 kūjō jōtarō?) es un personaje ficticio de la serie de manga japonés JoJo's Bizarre Adventure. Es el protagonista de la tercera saga: Stardust Crusaders. También hace apariciones en la cuarta, quinta y sexta saga, Diamond Is Unbreakable, Golden Wind y Stone Ocean respectivamente. Es el hijo de Holy Joestar y el padre de Jolyne Cujoh. 
          </Typography>
          <Typography sx={{ marginBottom: 2}}>
          La primera aparición de Jotaro es en el Capítulo 114 del manga, el primer capítulo de la saga Stardust Crusaders. Jotaro aparece nuevamente pero como aliado principal en la cuarta saga Diamond Is Unbreakable y con un rol clave en el sexto arco, Stone Ocean, donde Jotaro ayuda a Jolyne y compañía. Además, es el primer JoJo introducido que posee un Stand.           
          </Typography>
          <Typography sx={{ marginBottom: 2}}>
          Araki se basó en Clint Eastwood para la actitud de tipo malo de Jotaro. Incluso en una ocasión Araki e Eastwood se conocieron y el mangaka le pidió al actor que posara como Jotaro, Eastwood lo hizo y Araki le obsequió un cuadro especial de Jotaro.1
          </Typography>
          <Typography>
          Jotaro era un chico sobresaliente, un estudiante modelo, amable y de gran corazón. Pero todo cambió cuando cumplió 17 años, al mismo tiempo que DIO despertó de su sueño tras 100 años de estar dormido en el fondo del océano. Cuando DIO despertó su Stand, el cuerpo de Jonathan se conectó de cierta forma a sus descendientes, los cuales también despertaron su Stand, incluyendo a Jotaro, quien de pronto se encontró acompañado de una poderosa entidad espiritual de forma humanoide que no se separaba de su lado. 
          </Typography>
        </CardContent>
        </Collapse>
      </Card>
      </Grid>
        <Grid item xs={6}>
      <Card sx={{paddingTop: '20px'}}>
        <CardMedia
        component="img"
        alt='El mejor'
        image={edwardface}      
        height='270'
        />
        <Stack direction='row' alignItems='center' spacing={3} p={2} useFlexGap>
          <Stack direction='column' spacing={0.5} useFlexGap>
            <Typography>Edward Elric</Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <Chip
              size='small'
              label={'Active' }
              color={'success'}
              />
              <Rating defaultValue={2} size='large'/>
            </Stack>
          </Stack>
          
        </Stack>
      </Card>
      </Grid>
      </Grid>
    </>
  )
}

export default App
