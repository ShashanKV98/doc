import { useEffect,  useState } from 'react'
import {
  motion,
  // stagger,
  useAnimate,
  // useAnimation,
  // useInView,
} from 'framer-motion'
import {  clsx } from 'clsx'
import {
  PlayIcon,
  PauseIcon,
} from '@heroicons/react/24/outline'
import '@vidstack/react/player/styles/base.css'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as Slider from '@radix-ui/react-slider'
import {
  // useMediaStore,
  // useSliderStore,
  useSliderPreview,
  MediaPlayer,
  MediaProvider,
  useMediaRemote,
  // TimeSlider,
  formatTime,
  // Time,
  PlayButton,
  Gesture,
  useMediaState,
  Controls,
} from '@vidstack/react'

function App() {
  return (
    <div className='flex flex-col gap-y-24 min-h-0 home touch-auto'>
      <div className='py-4 flex justify-between self-center md:w-[80%] w-full gap-2 px-6 md:px-16'>
        <span className='font-inter text-lg md:text-2xl font-bold bg-clip-text text-transparent  inline-block bg-gradient-to-b from-cyan-400 to-blue-500'>
          Paradocs
        </span>
      </div>

      <AnimateEffect duration={1} filter={false} />
      <div className='bg-neutral-100 pt-10 pb-10 flex flex-col gap-y-16'>
        <Features />
        <Samples />
        <LastSection />
      </div>
    </div>
  )
}

const AnimateEffect = () => {
  const [scope, animate] = useAnimate()
  const [loaded, setLoaded] = useState(false)
  // const isInView = useInView(scope)
  // const handleAnimate = async () => {
  //   await animate(
  //     scope.current,
  //     {
  //       opacity: 1,
  //       y: 0,
  //       filter: filter ? 'blur(0px)' : 'none',
  //     },
  //     {
  //       duration: duration || 0.8,
  //       delay: stagger(0.2),
  //     }
  //   )
  // }
  // useEffect(() => {
  //   if (isInView) handleAnimate()
  // }, [isInView, scope.current])
  return (
    <div
      // ref={scope}
      // initial='offscreen'
      // whileInView='onscreen'
      // viewport={{ once: true, amount: 0.8 }}
      className='flex flex-col gap-y-24 touch-auto select-auto px-6 md:px-20'
      // style={{
      //   filter: filter ? 'blur(10px)' : 'none',
      //   y: 20,
      // }}
    >
      <div
        // ref={scope}
        // className='relative opacity-0 flex flex-col gap-y-10 m-auto'
        className='relative flex flex-col gap-y-10 m-auto touch-auto select-auto'
      >
        <div className='flex flex-col gap-y-3 w-full items-center'>
          <span
            className='font-inter text-[24px] sm:text-[32px] md:text-[48px] lg:text-[62px] font-bold'
            // className='opacity-0'
            // style={{
            //   filter: filter ? 'blur(10px)' : 'none',
            //   y: -30
            // }}
          >
            Go{' '}
            <motion.span className='font-inter font-bold bg-clip-text text-transparent  inline-block bg-gradient-to-b from-cyan-400 to-blue-500'>
              {' '}
              beyond{' '}
            </motion.span>{' '}
            just reading
          </span>
          {/* {words.split(' ').map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className='opacity-0'
                style={{
                  filter: filter ? 'blur(10px)' : 'none',
                }}
              >
                {word}
                {'  '}
              </motion.span>
            )
          })} */}
          <div className='flex flex-col'>
            <span
              // style={{
              //   wordSpacing: 20
              // }}
              className='font-inter font-semibold text-md sm:text-lg md:text-xl text-center text-black/80 tracking-normal '
              // className='opacity-0'
              // style={{
              //   filter: filter ? 'blur(10px)' : 'none',
              // }}
            >
              {/* Platform to transform your documents */}
              Create, Enhance, Discuss and much more.{'  '}
            </span>
            <span className='font-inter font-semibold text-md sm:text-lg md:text-xl text-center text-black/60 tracking-normal indent-6'>
              Turn static documents into an interactive experience.
            </span>
          </div>
        </div>
      </div>
      {/* <div className='m-auto flex flex-col gap-y-3 justify-center'> */}
      {/* <span className='font-inter text-lg text-center opacity/80'>
            Platform to transform your documents
          </span> */}
      {/* </div> */}
      <div className='md:w-[80%] w-full m-auto rounded-2xl bg-slate-200/40 touch-auto select-auto'>
        <motion.div
          className='w-full m-auto rounded-2xl bg-transparent'
          initial='offscreen'
          // animate={loaded ? 'onscreen' : 'offscreen'}
          whileInView={loaded ? 'onscreen' : 'offscreen'}
          viewport={{ once: true, amount: 0.2 }}
          variants={videoAnimationVariants}
        >
          <Video setLoaded={setLoaded} />
        </motion.div>
      </div>
    </div>
  )
}

const textFromLeftAnimationVariants = {
  offscreen: {
    x: -50,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
}

const textFromBottomAnimationVariants = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
}

const featureAnimationVariants = {
  offscreen: {
    y: 80,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: 'tween',
      // bounce: 0.4,
      duration: 0.5,
    },
  },
}
const videoAnimationVariants = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: 'tween',
      // bounce: 0.4,
      duration: 0.7,
      // delay: 0.25,
    },
  },
}

const Features = () => {
  // const [scope, animate] = useAnimate()
  // const isInView = useInView(scope)

  // const handleAnimate = async () => {
  //   await animate([[
  //     'span',
  //     {
  //       opacity: 1,
  //       y: 0,
  //       filter: 'none',
  //     },
  //     {
  //       duration: 0.5,
  //       delay: stagger(0),
  //     }
  //   ],[
  //   // await animate(
  //     'div',
  //     {
  //       opacity: 1,
  //       y: 0,
  //       filter: 'none',
  //     },
  //     {
  //       duration: 0.5,
  //       delay: stagger(0.1),
  //     }
  //   // )
  // ]])
  // }
  // useEffect(() => {
  //   if (isInView) handleAnimate()
  // }, [isInView, scope.current])
  return (
    <motion.div
      // ref={scope}
      // initial='offscreen'
      // whileInView='onscreen'
      // viewport={{ once: true, amount: 0.8 }}
      className='flex flex-col gap-y-10 md:gap-y-16 px-6 md:px-20'
    >
      <motion.span
        className='font-inter text-3xl sm:text-4xl md:text-5xl font-semibold'
        // style={{
        //   filter: 'none',
        //   y: 20,
        // }}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        variants={textFromLeftAnimationVariants}
      >
        See what you can do
      </motion.span>
      {/* <CardCarousel/> */}
      <CardStack />
    </motion.div>
  )
}


const featureOptions = [
  {
    id: 1,
    title: 'Media',
    description:
      'Enhance your documents with media elements such as photos, videos, audios, high-res images and 3D! ',
    url: [`/doc/picture.png`],
    className: 'w-full md:w-full lg:w-4/5 self-center',
  },
  {
    id: 2,
    title: 'AI text generation',
    description:
      'Powerful suite of AI tools like summarization, translation and personalized queries to get better understanding from the text.',
    url: [`/doc/ai_text2.png`],
    // className: 'w-4/5 self-center'
  },
  {
    id: 3,
    title: 'AI image generation',
    // description: 'Create images using AI and add them to your documents ',
    description:
      'Put your innovative ideas into text commands and create images using the latest AI tools. ',
    url: [`/doc/ai_image2.png`,`/doc/ai_image1.png`],
    className: 'w-1/2 self-center',
  },
  {
    id: 4,
    title: 'Annotate',
    // description: 'Annotate your documents with drawing tools and text editors',
    description:
      'Express your creative self with drawing tools and text editors. Make your documents more lively and fun to interact with.',

    url: [`/doc/annotations2.png`],
  },
  {
    id: 5,
    title: 'Comment',
    description:
      // 'Add your comments. You can even record your audio and use a whiteboard to comment! ',
      'Ask questions, chat with others and discuss your ideas right there. Even better, you can record your audio and use a whiteboard to comment!',
    url: [`/doc/comments-1.png`, `/doc/comments-2.png`],
    className: 'w-1/2 self-center',
  },
]
const CardStack = () => {
  return (
    <div className='flex flex-col w-full gap-y-8'>
      {featureOptions.map(({ id, title, description, url, className }, idx) => (
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.3 }}
          variants={featureAnimationVariants}
          key={id}
          className={clsx(
            'flex flex-col gap-y-8 justify-start hover:bg-slate-200/80 rounded-3xl p-6 transition-colors duration-200',
            {
              'md:flex-row gap-x-16': idx % 2 == 0,
              'md:flex-row-reverse gap-x-16': idx % 2 !== 0,
            }
          )}
          style={{
            filter: 'none',
            y: 20,
          }}
          // whileHover={{
          //   scale: 1.03,
          //   transition: {
          //     duration: 0.3,
          //   },
          // }}
        >
          <div className='relative flex flex-col gap-y-4 w-full md:w-1/2 justify-center'>
            <span className='font-inter font-semibold text-xl sm:text-2xl md:text-4xl relative'>
              {title}
            </span>
            <span className='font-inter text-md md:text-lg font-semibold opacity-60'>
              {description}
            </span>
          </div>

          <div
            className={clsx(
              'w-full md:w-1/2 flex flex-row justify-start gap-x-2'
            )}
          >
            {url.map((src, idx) => (
              <img
                key={idx}
                src={src}
                className={clsx('rounded-2xl', className, {
                  'mt-40': idx == 1,
                  '': idx == 0 && url.length > 1,
                })}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}


const sampleOptions = [
  {
    id: 1,
    title: 'Slides',
    description: 'Enrich your slides with media and engage in discussions',
    url: [`/doc/sample1.png`],
    // className: 'mt-20',
  },
  {
    id: 2,
    title: 'Assignments',
    description: 'Complete your assignments and get feedback',
    url: [`/doc/sample2.png`],
    // className: 'mt-14',
    // className: 'w-4/5 self-center'
  },
]

const Samples = () => {
  return (
    <motion.div
      // ref={scope}
      // initial='offscreen'
      // whileInView='onscreen'
      // viewport={{ once: true, amount: 0.8 }}
      className='flex flex-col gap-y-10 px-6 md:px-20'
    >
      <motion.span
        className='font-inter text-3xl sm:text-4xl md:text-5xl  font-semibold'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        variants={textFromLeftAnimationVariants}
      >
        Samples
      </motion.span>
      <SampleStack />
    </motion.div>
  )
}

// Carousel for more items (2 at a time)

const SampleStack = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-8 lg:gap-x-20'>
      {sampleOptions.map(({ id, title, description, url, className }, idx) => (
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.3 }}
          variants={featureAnimationVariants}
          key={id}
          // style={{
          //   backgroundImage: `url(${url})`,
          // }}
          className={clsx(
            ' hover:bg-slate-200/80 rounded-3xl p-10 transition-colors duration-200 flex flex-col space-y-12'
          )}
          // whileHover={{
          //   scale: 1.03,
          //   transition: {
          //     duration: 0.3,
          //   },
          // }}
        >
          <div className='relative flex flex-col gap-y-4  justify-center'>
            <span className='font-inter font-semibold text-xl sm:text-2xl relative'>
              {title}
            </span>
            <span className='font-inter text-lg font-semibold opacity-60'>
              {description}
            </span>
          </div>
          <img src={url} className={clsx(' w-full h-auto', className)} />
        </motion.div>
      ))}
    </div>
  )
}


const LastSection = () => {
  return (
    <div className='flex flex-col items-center gap-y-10 w-full m-auto bg-slate-950 py-20 transition-all duration-200'>
      <motion.span className='font-inter text-3xl sm:text-5xl text-slate-100 font-semibold'>
        {/* Get started with Paradocs */}
        Coming soon
      </motion.span>
      <motion.div>
        {/* <Link
          to='/doc'
          className='w-28 m-auto flex justify-center text-white text-base font-inter py-2.5 transition-all duration-200 bg-blue-600 hover:bg-blue-500 rounded-full'
        >
          Try now
        </Link> */}
      </motion.div>
    </div>
  )
}

const Video = ({ setLoaded }) => {
  return (
    // <video src={`/doc/demo.mp4`} />
    <MediaPlayer
      src={{
        src: `/doc/demo.mp4`,
        type: 'video/mp4',
      }}
      onLoadedData={() => setLoaded(true)}
      // style={{
      //   width: '80%',
      //   margin: 'auto'
      // }}
      className=' h-auto rounded-2xl'
    >
      <PlayerControls />
    </MediaPlayer>
  )
}

const PlayerControls = () => {
  const isPaused = useMediaState('paused')
  return (
    <>
      <MediaProvider className='w-full h-full' />
      <Controls.Root className='media-controls:opacity-100  absolute flex flex-row z-0 p-2 bottom-0 w-full h-full opacity-0'>
        <Tooltip.Provider>
          <Controls.Group className='w-full h-full flex flex-col-reverse justify-between '>
            <PlayButton className='absolute border-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer rounded-full bg-gradient-to-b from-slate-950/40 to-slate-700/40 p-6'>
              {isPaused ? (
                <PlayIcon className='size-8 stroke-2 stroke-slate-100 fill-slate-100' />
              ) : (
                <PauseIcon className='size-8 stroke-[3px] stroke-slate-100 fill-slate-100' />
              )}
            </PlayButton>
            {/* <div className='absolute w-full'> */}
              <CustomSlider />
            {/* </div> */}
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Root>
      <Gestures />
    </>
  )
}

function CustomSlider() {
  const time = useMediaState('currentTime'),
    canSeek = useMediaState('canSeek'),
    duration = useMediaState('duration'),
    seeking = useMediaState('seeking'),
    remote = useMediaRemote(),
    step = (1 / duration) * 100,
    [value, setValue] = useState(0),
    { previewRootRef, previewRef, previewValue } = useSliderPreview({
      clamp: true,
      offset: 6,
      orientation: 'horizontal',
    }),
    previewTime = (previewValue / 100) * duration

  // Keep slider value in-sync with playback.
  useEffect(() => {
    if (seeking) return
    setValue((time / duration) * 100)
  }, [time, duration])

  return (
    <Slider.Root
      // className='group relative inline-flex h-9 w-full cursor-pointer touch-none select-none items-center outline-none'
      className='group relative inline-flex h-9 w-full cursor-pointer touch-none select-none items-center outline-none'
      value={[value]}
      disabled={!canSeek}
      step={Number.isFinite(step) ? step : 1}
      ref={previewRootRef}
      onValueChange={([value]) => {
        setValue(value)
        remote.seeking((value / 100) * duration)
      }}
      onValueCommit={([value]) => {
        remote.seek((value / 100) * duration)
      }}
    >
      <Slider.Track className='h-1 w-full rounded-sm bg-slate-200/30 relative'>
        <Slider.Range className='bg-neutral-300 mix-blend-multiply absolute h-full rounded-sm will-change-[width]' />
      </Slider.Track>

      <Slider.Thumb
        aria-label='Current Time'
        className='block size-4 rounded-full bg-slate-200 border border-[#cacaca] outline-none opacity-0 ring-white/40 transition-opacity group-hocus:opacity-100 focus:opacity-100 focus:ring-4 will-change-[left]'
      />
      <div
        className='flex flex-col items-center absolute opacity-0 data-[visible]:opacity-100 transition-opacity duration-200 will-change-[left] p-2 bg-gradient-to-r from-stone-900/50 to-stone-950/50 rounded-lg'
        ref={previewRef}
      >
        <span className='text-sm text-slate-200 font-inter'>
          {formatTime(previewTime)}
        </span>
      </div>
    </Slider.Root>
  )
}

const Gestures = () => (
  <>
    <Gesture
      event='pointerup'
      action='toggle:paused'
      className={`absolute inset-0 block z-50 w-full h-full`}
    />
    <Gesture
      event='dblpointerup'
      action='seek:-10'
      className={`absolute top-0 left-0 z-50 block w-1/4 h-full`}
    />
    <Gesture
      event='dblpointerup'
      action='seek:10'
      className={`absolute top-0 right-0 z-50 block w-1/4 h-full`}
    />
  </>
)



export default App
