import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { testimonials } from "@/constant/constant";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-12 my-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Our Testimonials
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              What My Client Say
            </h2>
          </div>
        </motion.div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className="w-25 h-24 rounded-full mx-auto mb-4"
                width={96}
                height={96}
              />
              <p className="text-xl text-gray-500 mb-2">{testimonial.text}</p>
              <p className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
