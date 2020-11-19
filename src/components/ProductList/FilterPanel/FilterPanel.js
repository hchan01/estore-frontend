import React, { useState } from 'react';
import './FilterPanel.scss';
import { useDispatch } from 'react-redux';
import { filterSetMax } from '../actions';
import Form from 'react-bootstrap/Form';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const FilterPanel = ({ brands, max }) => {
    const dispatch = useDispatch();

    return (
        <Form>
            <div>
                <h4>Brand</h4>
                <Form.Group>
                {
                    brands.map((brand, index) => (
                        <Form.Check type="checkbox" id={`brand-${index}`} label={brand} value={brand} name="brand" />
                    ))
                }
                </Form.Group>
                <h4>Price Range</h4>
                <Form.Group>
                    <Range
                        allowCross={false}
                        min={0}
                        max={max}
                        defaultValue={[0, max]}
                        marks={{
                            0: '£0',
                            [max]: `£${max}`
                        }}
                        tipFormatter={value => `£${value}`}
                        onAfterChange={value => {
                            const [min, max] = value;
                            dispatch(filterSetMax(max));
                        }}
                    />
                </Form.Group>

                <h4>Sort By</h4>
                <Form.Group>
                    <Form.Check type="radio" label="Price: Low to High" />
                    <Form.Check type="radio" label="Price: High to Low" />
                </Form.Group>
            </div>
        </Form>
    )
}