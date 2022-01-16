import React from 'react';

import style from './SelectEpisode.module.scss';

function SelectEpisode({ setId }) {
  return (
    <div className={style.wrapp}>
      <select name="epis" id="ep" onChange={(e) => setId(e.target.value)}>
        <option value="1">Episode-Pilot</option>
        <option value="2">Episode-2</option>
        <option value="3">Episode-3</option>
        <option value="4">Episode-4</option>
        <option value="5">Episode-5</option>
        <option value="6">Episode-6</option>
        <option value="7">Episode-7</option>
        <option value="8">Episode-8</option>
        <option value="9">Episode-9</option>
        <option value="10">Episode-10</option>
        <option value="11">Episode-11</option>
        <option value="12">Episode-12</option>
        <option value="13">Episode-13</option>
        <option value="14">Episode-14</option>
        <option value="15">Episode-15</option>
        <option value="16">Episode-16</option>
        <option value="17">Episode-17</option>
        <option value="18">Episode-18</option>
        <option value="19">Episode-19</option>
        <option value="20">Episode-20</option>
        <option value="21">Episode-21</option>
        <option value="22">Episode-22</option>
        <option value="23">Episode-23</option>
        <option value="24">Episode-24</option>
        <option value="25">Episode-25</option>
        <option value="26">Episode-26</option>
        <option value="27">Episode-27</option>
        <option value="28">Episode-28</option>
        <option value="29">Episode-29</option>
        <option value="30">Episode-30</option>
        <option value="31">Episode-31</option>
        <option value="32">Episode-32</option>
        <option value="33">Episode-33</option>
        <option value="34">Episode-34</option>
        <option value="35">Episode-35</option>
        <option value="36">Episode-36</option>
        <option value="37">Episode-37</option>
        <option value="38">Episode-38</option>
        <option value="39">Episode-39</option>
        <option value="40">Episode-40</option>
        <option value="41">Episode-41</option>
        <option value="42">Episode-42</option>
        <option value="43">Episode-43</option>
        <option value="44">Episode-44</option>
        <option value="45">Episode-45</option>
        <option value="46">Episode-46</option>
        <option value="47">Episode-47</option>
        <option value="48">Episode-48</option>
        <option value="49">Episode-49</option>
        <option value="50">Episode-50</option>
        <option value="51">Episode-51</option>
      </select>
    </div>
  );
}

export default SelectEpisode;
