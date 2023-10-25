import EmblaCarousel from 'embla-carousel';
import { addPrevNextBtnsClickHandlers } from './arrows-buttons';
import '../css/embla.css';

const OPTIONS = { containScroll: 'trimSnaps', loop: true };

const emblaNode = document.querySelector('.embla');
const viewportNode = emblaNode.querySelector('.embla__viewport');
const prevBtn = emblaNode.querySelector('.embla__button--prev');
const nextBtn = emblaNode.querySelector('.embla__button--next');
const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn
);

emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
