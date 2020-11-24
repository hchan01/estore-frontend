import React, { useState, useEffect } from 'react';
import './FilterPanel.scss';
import Form from 'react-bootstrap/Form';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { setMaxListeners } from 'process';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const FilterPanel = ({onFilter, products, brandsList, brands, setBrands, max, setMax, setCurrentMax, setCurrentMin, setSortOrder}) => {
    // const [brands, setBrands] = useState(
    //     products.map(product => {
    //         return {
    //             value: product.brand,
    //             checked: false
    //         }
    //     })
    // );

    // const max = Math.max(...products.map(product => product.unitPrice));

    // useEffect(() => {
    //     console.log('use efefct', brands)
    //     onFilter('brand', brands);
    // }, [brands]);

    return (
        <Form>
            <div>
                <h4>Brand</h4>

                {/* {
                    
                    filters.map(filter =>
                        <Form.Group>
                            {
                                products.map(product => product[filter.key]).map((value, index) => (
                                    <Form.Check type="checkbox" id={`brand-${index}`} label={value} value={value} name={filter.key} onChange={(e) => {
                                        const temp = [...brands];
                                        console.log('temp', temp)
                                        temp.forEach(brand => {
                                            if (brand.value == e.target.value) {
                                                brand.checked = e.target.checked;
                                            }
                                        })
                                        console.log('updating', temp)
                                        setBrands(temp);
                                    }} />
                                ))
                            }
                        </Form.Group>
                    )
                } */}


                
                

                {
                    brandsList.map((brand, index) => (
                        <Form.Group>
                            <Form.Check type="checkbox" id={`brand-${index}`} label={brand.brand} value={brand.brand} name="brand" onChange={(e) => {
                                    if (e.target.checked) {
                                        setBrands([...brands, e.target.value]);
                                    }
                                    else {
                                        setBrands(brands.filter(brand => brand !== e.target.value));
                                    }
                                }}
                            />
                        </Form.Group>
                    ))
                }
                
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
                            setCurrentMin(min);
                            setCurrentMax(max);
                        }}
                    />
                </Form.Group>

                <h4>Sort By</h4>
                <Form.Group>
                    <Form.Check type="radio" name="sort" id="sort-lth" label="Price: Low to High" onChange={() => { setSortOrder('LOW_TO_HIGH'); }} />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="radio" name="sort" id="sort-htl" label="Price: High to Low" onChange={() => { setSortOrder('HIGH_TO_LOW'); }} />
                </Form.Group>
            </div>
        </Form>
    )
}