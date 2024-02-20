import{s as Nt,n as Bt,o as Et}from"../chunks/scheduler.9bc65507.js";import{S as St,i as Ot,g as r,s as o,r as b,A as Ut,h as a,f as s,c as n,j as v,u as w,x as l,k as x,y as t,a as d,v as y,d as T,t as q,w as $}from"../chunks/index.707bf1b6.js";import{D as F}from"../chunks/Docstring.17db21ae.js";import{H as It}from"../chunks/Heading.342b1fa6.js";function At(it){let C,ve,_e,we,L,xe,P,lt="This page lists all the utility functions that can be used by the audio <code>FeatureExtractor</code> in order to compute special features from a raw audio using common algorithms such as <em>Short Time Fourier Transform</em> or <em>log mel spectrogram</em>.",ye,D,dt="Most of those are only useful if you are studying the code of the audio processors in the library.",Te,I,qe,k,N,Ne,V,ct="Convert frequency from hertz to mels.",$e,z,B,Be,j,mt="Convert frequency from mels to hertz.",Ce,u,E,Ee,W,ut=`Creates a frequency bin conversion matrix used to obtain a mel spectrogram. This is called a <em>mel filter bank</em>, and
various implementation exist, which differ in the number of filters, the shape of the filters, the way the filters
are spaced, the bandwidth of the filters, and the manner in which the spectrum is warped. The goal of these
features is to approximate the non-linear human perception of the variation in pitch with respect to the frequency.`,Se,G,pt="Different banks of mel filters were introduced in the literature. The following variations are supported:",Oe,K,ft=`<li>MFCC FB-20: introduced in 1980 by Davis and Mermelstein, it assumes a sampling frequency of 10 kHz and a speech
bandwidth of <code>[0, 4600]</code> Hz.</li> <li>MFCC FB-24 HTK: from the Cambridge HMM Toolkit (HTK) (1995) uses a filter bank of 24 filters for a speech
bandwidth of <code>[0, 8000]</code> Hz. This assumes sampling rate ≥ 16 kHz.</li> <li>MFCC FB-40: from the Auditory Toolbox for MATLAB written by Slaney in 1998, assumes a sampling rate of 16 kHz and
speech bandwidth of <code>[133, 6854]</code> Hz. This version also includes area normalization.</li> <li>HFCC-E FB-29 (Human Factor Cepstral Coefficients) of Skowronski and Harris (2004), assumes a sampling rate of
12.5 kHz and speech bandwidth of <code>[0, 6250]</code> Hz.</li>`,Ue,R,ht=`This code is adapted from <em>torchaudio</em> and <em>librosa</em>. Note that the default parameters of torchaudio’s
<code>melscale_fbanks</code> implement the <code>&quot;htk&quot;</code> filters while librosa uses the <code>&quot;slaney&quot;</code> implementation.`,ke,h,S,Ae,J,gt=`Finds the best FFT input size for a given <code>window_length</code>. This function takes a given window length and, if not
already a power of two, rounds it up to the next power or two.`,Qe,X,_t=`The FFT algorithm works fastest when the length of the input is a power of two, which may be larger than the size
of the window or analysis frame. For example, if the window is 400 samples, using an FFT input size of 512 samples
is more optimal than an FFT size of 400 samples. Using a larger FFT size does not affect the detected frequencies,
it simply gives a higher frequency resolution (i.e. the frequency bins are smaller).`,ze,p,O,Ve,Y,bt="Returns an array containing the specified window. This window is intended to be used with <code>stft</code>.",je,Z,vt="The following window types are supported:",We,ee,wt="<li><code>&quot;boxcar&quot;</code>: a rectangular window</li> <li><code>&quot;hamming&quot;</code>: the Hamming window</li> <li><code>&quot;hann&quot;</code>: the Hann window</li> <li><code>&quot;povey&quot;</code>: the Povey window</li>",He,c,U,Ge,te,xt="Calculates a spectrogram over one waveform using the Short-Time Fourier Transform.",Ke,oe,yt="This function can create the following kinds of spectrograms:",Re,ne,Tt="<li>amplitude spectrogram (<code>power = 1.0</code>)</li> <li>power spectrogram (<code>power = 2.0</code>)</li> <li>complex-valued spectrogram (<code>power = None</code>)</li> <li>log spectrogram (use <code>log_mel</code> argument)</li> <li>mel spectrogram (provide <code>mel_filters</code>)</li> <li>log-mel spectrogram (provide <code>mel_filters</code> and <code>log_mel</code>)</li>",Je,re,qt="How this works:",Xe,ae,$t="<li>The input waveform is split into frames of size <code>frame_length</code> that are partially overlapping by `frame_length<ul><li>hop_length` samples.</li></ul></li> <li>Each frame is multiplied by the window and placed into a buffer of size <code>fft_length</code>.</li> <li>The DFT is taken of each windowed frame.</li> <li>The results are stacked into a spectrogram.</li>",Ye,se,Ct="We make a distinction between the following “blocks” of sample data, each of which may have a different lengths:",Ze,ie,kt="<li>The analysis frame. This is the size of the time slices that the input waveform is split into.</li> <li>The window. Each analysis frame is multiplied by the window to avoid spectral leakage.</li> <li>The FFT input buffer. The length of this determines how many frequency bins are in the spectrogram.</li>",et,le,zt=`In this implementation, the window is assumed to be zero-padded to have the same size as the analysis frame. A
padded window can be obtained from <code>window_function()</code>. The FFT input buffer may be larger than the analysis frame,
typically the next power of two.`,tt,de,Ht=`Note: This function is not optimized for speed yet. It should be mostly compatible with <code>librosa.stft</code> and
<code>torchaudio.functional.transforms.Spectrogram</code>, although it is more flexible due to the different ways spectrograms
can be constructed.`,Me,f,A,ot,ce,Mt=`Converts a power spectrogram to the decibel scale. This computes <code>10 * log10(spectrogram / reference)</code>, using basic
logarithm properties for numerical stability.`,nt,me,Ft=`The motivation behind applying the log function on the (mel) spectrogram is that humans do not hear loudness on a
linear scale. Generally to double the perceived volume of a sound we need to put 8 times as much energy into it.
This means that large variations in energy may not sound all that different if the sound is loud to begin with.
This compression operation makes the (mel) spectrogram features match more closely what humans actually hear.`,rt,ue,Lt="Based on the implementation of <code>librosa.power_to_db</code>.",Fe,g,Q,at,pe,Pt=`Converts an amplitude spectrogram to the decibel scale. This computes <code>20 * log10(spectrogram / reference)</code>, using
basic logarithm properties for numerical stability.`,st,fe,Dt=`The motivation behind applying the log function on the (mel) spectrogram is that humans do not hear loudness on a
linear scale. Generally to double the perceived volume of a sound we need to put 8 times as much energy into it.
This means that large variations in energy may not sound all that different if the sound is loud to begin with.
This compression operation makes the (mel) spectrogram features match more closely what humans actually hear.`,Le,be,Pe;return L=new It({props:{title:"Utilities for FeatureExtractors",local:"utilities-for-featureextractors",headingTag:"h1"}}),I=new It({props:{title:"Audio Transformations",local:"transformers.audio_utils.hertz_to_mel",headingTag:"h2"}}),N=new F({props:{name:"transformers.audio_utils.hertz_to_mel",anchor:"transformers.audio_utils.hertz_to_mel",parameters:[{name:"freq",val:": Union"},{name:"mel_scale",val:": str = 'htk'"}],parametersDescription:[{anchor:"transformers.audio_utils.hertz_to_mel.freq",description:`<strong>freq</strong> (<code>float</code> or <code>np.ndarray</code>) &#x2014;
The frequency, or multiple frequencies, in hertz (Hz).`,name:"freq"},{anchor:"transformers.audio_utils.hertz_to_mel.mel_scale",description:`<strong>mel_scale</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;htk&quot;</code>) &#x2014;
The mel frequency scale to use, <code>&quot;htk&quot;</code>, <code>&quot;kaldi&quot;</code> or <code>&quot;slaney&quot;</code>.`,name:"mel_scale"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L25",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The frequencies on the mel scale.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>float</code> or <code>np.ndarray</code></p>
`}}),B=new F({props:{name:"transformers.audio_utils.mel_to_hertz",anchor:"transformers.audio_utils.mel_to_hertz",parameters:[{name:"mels",val:": Union"},{name:"mel_scale",val:": str = 'htk'"}],parametersDescription:[{anchor:"transformers.audio_utils.mel_to_hertz.mels",description:`<strong>mels</strong> (<code>float</code> or <code>np.ndarray</code>) &#x2014;
The frequency, or multiple frequencies, in mels.`,name:"mels"},{anchor:"transformers.audio_utils.mel_to_hertz.mel_scale",description:`<strong>mel_scale</strong> (<code>str</code>, <em>optional</em>, <code>&quot;htk&quot;</code>) &#x2014;
The mel frequency scale to use, <code>&quot;htk&quot;</code>, <code>&quot;kaldi&quot;</code> or <code>&quot;slaney&quot;</code>.`,name:"mel_scale"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L61",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The frequencies in hertz.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>float</code> or <code>np.ndarray</code></p>
`}}),E=new F({props:{name:"transformers.audio_utils.mel_filter_bank",anchor:"transformers.audio_utils.mel_filter_bank",parameters:[{name:"num_frequency_bins",val:": int"},{name:"num_mel_filters",val:": int"},{name:"min_frequency",val:": float"},{name:"max_frequency",val:": float"},{name:"sampling_rate",val:": int"},{name:"norm",val:": Optional = None"},{name:"mel_scale",val:": str = 'htk'"},{name:"triangularize_in_mel_space",val:": bool = False"}],parametersDescription:[{anchor:"transformers.audio_utils.mel_filter_bank.num_frequency_bins",description:`<strong>num_frequency_bins</strong> (<code>int</code>) &#x2014;
Number of frequencies used to compute the spectrogram (should be the same as in <code>stft</code>).`,name:"num_frequency_bins"},{anchor:"transformers.audio_utils.mel_filter_bank.num_mel_filters",description:`<strong>num_mel_filters</strong> (<code>int</code>) &#x2014;
Number of mel filters to generate.`,name:"num_mel_filters"},{anchor:"transformers.audio_utils.mel_filter_bank.min_frequency",description:`<strong>min_frequency</strong> (<code>float</code>) &#x2014;
Lowest frequency of interest in Hz.`,name:"min_frequency"},{anchor:"transformers.audio_utils.mel_filter_bank.max_frequency",description:`<strong>max_frequency</strong> (<code>float</code>) &#x2014;
Highest frequency of interest in Hz. This should not exceed <code>sampling_rate / 2</code>.`,name:"max_frequency"},{anchor:"transformers.audio_utils.mel_filter_bank.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>) &#x2014;
Sample rate of the audio waveform.`,name:"sampling_rate"},{anchor:"transformers.audio_utils.mel_filter_bank.norm",description:`<strong>norm</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If <code>&quot;slaney&quot;</code>, divide the triangular mel weights by the width of the mel band (area normalization).`,name:"norm"},{anchor:"transformers.audio_utils.mel_filter_bank.mel_scale",description:`<strong>mel_scale</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;htk&quot;</code>) &#x2014;
The mel frequency scale to use, <code>&quot;htk&quot;</code>, <code>&quot;kaldi&quot;</code> or <code>&quot;slaney&quot;</code>.`,name:"mel_scale"},{anchor:"transformers.audio_utils.mel_filter_bank.triangularize_in_mel_space",description:`<strong>triangularize_in_mel_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If this option is enabled, the triangular filter is applied in mel space rather than frequency space. This
should be set to <code>true</code> in order to get the same results as <code>torchaudio</code> when computing mel filters.`,name:"triangularize_in_mel_space"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L119",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Triangular filter bank matrix. This is a
projection matrix to go from a spectrogram to a mel spectrogram.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>np.ndarray</code> of shape (<code>num_frequency_bins</code>, <code>num_mel_filters</code>)</p>
`}}),S=new F({props:{name:"transformers.audio_utils.optimal_fft_length",anchor:"transformers.audio_utils.optimal_fft_length",parameters:[{name:"window_length",val:": int"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L207"}}),O=new F({props:{name:"transformers.audio_utils.window_function",anchor:"transformers.audio_utils.window_function",parameters:[{name:"window_length",val:": int"},{name:"name",val:": str = 'hann'"},{name:"periodic",val:": bool = True"},{name:"frame_length",val:": Optional = None"},{name:"center",val:": bool = True"}],parametersDescription:[{anchor:"transformers.audio_utils.window_function.window_length",description:`<strong>window_length</strong> (<code>int</code>) &#x2014;
The length of the window in samples.`,name:"window_length"},{anchor:"transformers.audio_utils.window_function.name",description:`<strong>name</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;hann&quot;</code>) &#x2014;
The name of the window function.`,name:"name"},{anchor:"transformers.audio_utils.window_function.periodic",description:`<strong>periodic</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the window is periodic or symmetric.`,name:"periodic"},{anchor:"transformers.audio_utils.window_function.frame_length",description:`<strong>frame_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The length of the analysis frames in samples. Provide a value for <code>frame_length</code> if the window is smaller
than the frame length, so that it will be zero-padded.`,name:"frame_length"},{anchor:"transformers.audio_utils.window_function.center",description:`<strong>center</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center the window inside the FFT buffer. Only used when <code>frame_length</code> is provided.`,name:"center"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L220",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>np.ndarray</code> of shape <code>(window_length,)</code> or <code>(frame_length,)</code> containing the window.</p>
`}}),U=new F({props:{name:"transformers.audio_utils.spectrogram",anchor:"transformers.audio_utils.spectrogram",parameters:[{name:"waveform",val:": ndarray"},{name:"window",val:": ndarray"},{name:"frame_length",val:": int"},{name:"hop_length",val:": int"},{name:"fft_length",val:": Optional = None"},{name:"power",val:": Optional = 1.0"},{name:"center",val:": bool = True"},{name:"pad_mode",val:": str = 'reflect'"},{name:"onesided",val:": bool = True"},{name:"preemphasis",val:": Optional = None"},{name:"mel_filters",val:": Optional = None"},{name:"mel_floor",val:": float = 1e-10"},{name:"log_mel",val:": Optional = None"},{name:"reference",val:": float = 1.0"},{name:"min_value",val:": float = 1e-10"},{name:"db_range",val:": Optional = None"},{name:"remove_dc_offset",val:": Optional = None"},{name:"dtype",val:": dtype = <class 'numpy.float32'>"}],parametersDescription:[{anchor:"transformers.audio_utils.spectrogram.waveform",description:`<strong>waveform</strong> (<code>np.ndarray</code> of shape <code>(length,)</code>) &#x2014;
The input waveform. This must be a single real-valued, mono waveform.`,name:"waveform"},{anchor:"transformers.audio_utils.spectrogram.window",description:`<strong>window</strong> (<code>np.ndarray</code> of shape <code>(frame_length,)</code>) &#x2014;
The windowing function to apply, including zero-padding if necessary. The actual window length may be
shorter than <code>frame_length</code>, but we&#x2019;re assuming the array has already been zero-padded.`,name:"window"},{anchor:"transformers.audio_utils.spectrogram.frame_length",description:`<strong>frame_length</strong> (<code>int</code>) &#x2014;
The length of the analysis frames in samples. With librosa this is always equal to <code>fft_length</code> but we also
allow smaller sizes.`,name:"frame_length"},{anchor:"transformers.audio_utils.spectrogram.hop_length",description:`<strong>hop_length</strong> (<code>int</code>) &#x2014;
The stride between successive analysis frames in samples.`,name:"hop_length"},{anchor:"transformers.audio_utils.spectrogram.fft_length",description:`<strong>fft_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The size of the FFT buffer in samples. This determines how many frequency bins the spectrogram will have.
For optimal speed, this should be a power of two. If <code>None</code>, uses <code>frame_length</code>.`,name:"fft_length"},{anchor:"transformers.audio_utils.spectrogram.power",description:`<strong>power</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
If 1.0, returns the amplitude spectrogram. If 2.0, returns the power spectrogram. If <code>None</code>, returns
complex numbers.`,name:"power"},{anchor:"transformers.audio_utils.spectrogram.center",description:`<strong>center</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to pad the waveform so that frame <code>t</code> is centered around time <code>t * hop_length</code>. If <code>False</code>, frame
<code>t</code> will start at time <code>t * hop_length</code>.`,name:"center"},{anchor:"transformers.audio_utils.spectrogram.pad_mode",description:`<strong>pad_mode</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;reflect&quot;</code>) &#x2014;
Padding mode used when <code>center</code> is <code>True</code>. Possible values are: <code>&quot;constant&quot;</code> (pad with zeros), <code>&quot;edge&quot;</code>
(pad with edge values), <code>&quot;reflect&quot;</code> (pads with mirrored values).`,name:"pad_mode"},{anchor:"transformers.audio_utils.spectrogram.onesided",description:`<strong>onesided</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If True, only computes the positive frequencies and returns a spectrogram containing <code>fft_length // 2 + 1</code>
frequency bins. If False, also computes the negative frequencies and returns <code>fft_length</code> frequency bins.`,name:"onesided"},{anchor:"transformers.audio_utils.spectrogram.preemphasis",description:`<strong>preemphasis</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Coefficient for a low-pass filter that applies pre-emphasis before the DFT.`,name:"preemphasis"},{anchor:"transformers.audio_utils.spectrogram.mel_filters",description:`<strong>mel_filters</strong> (<code>np.ndarray</code> of shape <code>(num_freq_bins, num_mel_filters)</code>, <em>optional</em>) &#x2014;
The mel filter bank. If supplied, applies a this filter bank to create a mel spectrogram.`,name:"mel_filters"},{anchor:"transformers.audio_utils.spectrogram.mel_floor",description:`<strong>mel_floor</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-10) &#x2014;
Minimum value of mel frequency banks.`,name:"mel_floor"},{anchor:"transformers.audio_utils.spectrogram.log_mel",description:`<strong>log_mel</strong> (<code>str</code>, <em>optional</em>) &#x2014;
How to convert the spectrogram to log scale. Possible options are: <code>None</code> (don&#x2019;t convert), <code>&quot;log&quot;</code> (take
the natural logarithm) <code>&quot;log10&quot;</code> (take the base-10 logarithm), <code>&quot;dB&quot;</code> (convert to decibels). Can only be
used when <code>power</code> is not <code>None</code>.`,name:"log_mel"},{anchor:"transformers.audio_utils.spectrogram.reference",description:`<strong>reference</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Sets the input spectrogram value that corresponds to 0 dB. For example, use <code>np.max(spectrogram)</code> to set
the loudest part to 0 dB. Must be greater than zero.`,name:"reference"},{anchor:"transformers.audio_utils.spectrogram.min_value",description:`<strong>min_value</strong> (<code>float</code>, <em>optional</em>, defaults to <code>1e-10</code>) &#x2014;
The spectrogram will be clipped to this minimum value before conversion to decibels, to avoid taking
<code>log(0)</code>. For a power spectrogram, the default of <code>1e-10</code> corresponds to a minimum of -100 dB. For an
amplitude spectrogram, the value <code>1e-5</code> corresponds to -100 dB. Must be greater than zero.`,name:"min_value"},{anchor:"transformers.audio_utils.spectrogram.db_range",description:`<strong>db_range</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Sets the maximum dynamic range in decibels. For example, if <code>db_range = 80</code>, the difference between the
peak value and the smallest value will never be more than 80 dB. Must be greater than zero.`,name:"db_range"},{anchor:"transformers.audio_utils.spectrogram.remove_dc_offset",description:`<strong>remove_dc_offset</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Subtract mean from waveform on each frame, applied before pre-emphasis. This should be set to <code>true</code> in
order to get the same results as <code>torchaudio.compliance.kaldi.fbank</code> when computing mel filters.`,name:"remove_dc_offset"},{anchor:"transformers.audio_utils.spectrogram.dtype",description:`<strong>dtype</strong> (<code>np.dtype</code>, <em>optional</em>, defaults to <code>np.float32</code>) &#x2014;
Data type of the spectrogram tensor. If <code>power</code> is None, this argument is ignored and the dtype will be
<code>np.complex64</code>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L284",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>nd.array</code> containing a spectrogram of shape <code>(num_frequency_bins, length)</code> for a regular spectrogram or shape
<code>(num_mel_filters, length)</code> for a mel spectrogram.</p>
`}}),A=new F({props:{name:"transformers.audio_utils.power_to_db",anchor:"transformers.audio_utils.power_to_db",parameters:[{name:"spectrogram",val:": ndarray"},{name:"reference",val:": float = 1.0"},{name:"min_value",val:": float = 1e-10"},{name:"db_range",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.audio_utils.power_to_db.spectrogram",description:`<strong>spectrogram</strong> (<code>np.ndarray</code>) &#x2014;
The input power (mel) spectrogram. Note that a power spectrogram has the amplitudes squared!`,name:"spectrogram"},{anchor:"transformers.audio_utils.power_to_db.reference",description:`<strong>reference</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Sets the input spectrogram value that corresponds to 0 dB. For example, use <code>np.max(spectrogram)</code> to set
the loudest part to 0 dB. Must be greater than zero.`,name:"reference"},{anchor:"transformers.audio_utils.power_to_db.min_value",description:`<strong>min_value</strong> (<code>float</code>, <em>optional</em>, defaults to <code>1e-10</code>) &#x2014;
The spectrogram will be clipped to this minimum value before conversion to decibels, to avoid taking
<code>log(0)</code>. The default of <code>1e-10</code> corresponds to a minimum of -100 dB. Must be greater than zero.`,name:"min_value"},{anchor:"transformers.audio_utils.power_to_db.db_range",description:`<strong>db_range</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Sets the maximum dynamic range in decibels. For example, if <code>db_range = 80</code>, the difference between the
peak value and the smallest value will never be more than 80 dB. Must be greater than zero.`,name:"db_range"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L479",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>the spectrogram in decibels</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>np.ndarray</code></p>
`}}),Q=new F({props:{name:"transformers.audio_utils.amplitude_to_db",anchor:"transformers.audio_utils.amplitude_to_db",parameters:[{name:"spectrogram",val:": ndarray"},{name:"reference",val:": float = 1.0"},{name:"min_value",val:": float = 1e-05"},{name:"db_range",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.audio_utils.amplitude_to_db.spectrogram",description:`<strong>spectrogram</strong> (<code>np.ndarray</code>) &#x2014;
The input amplitude (mel) spectrogram.`,name:"spectrogram"},{anchor:"transformers.audio_utils.amplitude_to_db.reference",description:`<strong>reference</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Sets the input spectrogram value that corresponds to 0 dB. For example, use <code>np.max(spectrogram)</code> to set
the loudest part to 0 dB. Must be greater than zero.`,name:"reference"},{anchor:"transformers.audio_utils.amplitude_to_db.min_value",description:`<strong>min_value</strong> (<code>float</code>, <em>optional</em>, defaults to <code>1e-5</code>) &#x2014;
The spectrogram will be clipped to this minimum value before conversion to decibels, to avoid taking
<code>log(0)</code>. The default of <code>1e-5</code> corresponds to a minimum of -100 dB. Must be greater than zero.`,name:"min_value"},{anchor:"transformers.audio_utils.amplitude_to_db.db_range",description:`<strong>db_range</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Sets the maximum dynamic range in decibels. For example, if <code>db_range = 80</code>, the difference between the
peak value and the smallest value will never be more than 80 dB. Must be greater than zero.`,name:"db_range"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/audio_utils.py#L530",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>the spectrogram in decibels</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>np.ndarray</code></p>
`}}),{c(){C=r("meta"),ve=o(),_e=r("p"),we=o(),b(L.$$.fragment),xe=o(),P=r("p"),P.innerHTML=lt,ye=o(),D=r("p"),D.textContent=dt,Te=o(),b(I.$$.fragment),qe=o(),k=r("div"),b(N.$$.fragment),Ne=o(),V=r("p"),V.textContent=ct,$e=o(),z=r("div"),b(B.$$.fragment),Be=o(),j=r("p"),j.textContent=mt,Ce=o(),u=r("div"),b(E.$$.fragment),Ee=o(),W=r("p"),W.innerHTML=ut,Se=o(),G=r("p"),G.textContent=pt,Oe=o(),K=r("ul"),K.innerHTML=ft,Ue=o(),R=r("p"),R.innerHTML=ht,ke=o(),h=r("div"),b(S.$$.fragment),Ae=o(),J=r("p"),J.innerHTML=gt,Qe=o(),X=r("p"),X.textContent=_t,ze=o(),p=r("div"),b(O.$$.fragment),Ve=o(),Y=r("p"),Y.innerHTML=bt,je=o(),Z=r("p"),Z.textContent=vt,We=o(),ee=r("ul"),ee.innerHTML=wt,He=o(),c=r("div"),b(U.$$.fragment),Ge=o(),te=r("p"),te.textContent=xt,Ke=o(),oe=r("p"),oe.textContent=yt,Re=o(),ne=r("ul"),ne.innerHTML=Tt,Je=o(),re=r("p"),re.textContent=qt,Xe=o(),ae=r("ol"),ae.innerHTML=$t,Ye=o(),se=r("p"),se.textContent=Ct,Ze=o(),ie=r("ul"),ie.innerHTML=kt,et=o(),le=r("p"),le.innerHTML=zt,tt=o(),de=r("p"),de.innerHTML=Ht,Me=o(),f=r("div"),b(A.$$.fragment),ot=o(),ce=r("p"),ce.innerHTML=Mt,nt=o(),me=r("p"),me.textContent=Ft,rt=o(),ue=r("p"),ue.innerHTML=Lt,Fe=o(),g=r("div"),b(Q.$$.fragment),at=o(),pe=r("p"),pe.innerHTML=Pt,st=o(),fe=r("p"),fe.textContent=Dt,Le=o(),be=r("p"),this.h()},l(e){const i=Ut("svelte-u9bgzb",document.head);C=a(i,"META",{name:!0,content:!0}),i.forEach(s),ve=n(e),_e=a(e,"P",{}),v(_e).forEach(s),we=n(e),w(L.$$.fragment,e),xe=n(e),P=a(e,"P",{"data-svelte-h":!0}),l(P)!=="svelte-sdayy0"&&(P.innerHTML=lt),ye=n(e),D=a(e,"P",{"data-svelte-h":!0}),l(D)!=="svelte-1o3lpho"&&(D.textContent=dt),Te=n(e),w(I.$$.fragment,e),qe=n(e),k=a(e,"DIV",{class:!0});var De=v(k);w(N.$$.fragment,De),Ne=n(De),V=a(De,"P",{"data-svelte-h":!0}),l(V)!=="svelte-cxvipk"&&(V.textContent=ct),De.forEach(s),$e=n(e),z=a(e,"DIV",{class:!0});var Ie=v(z);w(B.$$.fragment,Ie),Be=n(Ie),j=a(Ie,"P",{"data-svelte-h":!0}),l(j)!=="svelte-zjf634"&&(j.textContent=mt),Ie.forEach(s),Ce=n(e),u=a(e,"DIV",{class:!0});var _=v(u);w(E.$$.fragment,_),Ee=n(_),W=a(_,"P",{"data-svelte-h":!0}),l(W)!=="svelte-ke4v6b"&&(W.innerHTML=ut),Se=n(_),G=a(_,"P",{"data-svelte-h":!0}),l(G)!=="svelte-1qgwg3t"&&(G.textContent=pt),Oe=n(_),K=a(_,"UL",{"data-svelte-h":!0}),l(K)!=="svelte-hp9cn6"&&(K.innerHTML=ft),Ue=n(_),R=a(_,"P",{"data-svelte-h":!0}),l(R)!=="svelte-7p7meu"&&(R.innerHTML=ht),_.forEach(s),ke=n(e),h=a(e,"DIV",{class:!0});var he=v(h);w(S.$$.fragment,he),Ae=n(he),J=a(he,"P",{"data-svelte-h":!0}),l(J)!=="svelte-7kwh1t"&&(J.innerHTML=gt),Qe=n(he),X=a(he,"P",{"data-svelte-h":!0}),l(X)!=="svelte-iy5srj"&&(X.textContent=_t),he.forEach(s),ze=n(e),p=a(e,"DIV",{class:!0});var H=v(p);w(O.$$.fragment,H),Ve=n(H),Y=a(H,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-1ws351k"&&(Y.innerHTML=bt),je=n(H),Z=a(H,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-tutl6h"&&(Z.textContent=vt),We=n(H),ee=a(H,"UL",{"data-svelte-h":!0}),l(ee)!=="svelte-1wr1sb5"&&(ee.innerHTML=wt),H.forEach(s),He=n(e),c=a(e,"DIV",{class:!0});var m=v(c);w(U.$$.fragment,m),Ge=n(m),te=a(m,"P",{"data-svelte-h":!0}),l(te)!=="svelte-10mwufd"&&(te.textContent=xt),Ke=n(m),oe=a(m,"P",{"data-svelte-h":!0}),l(oe)!=="svelte-zfp2ya"&&(oe.textContent=yt),Re=n(m),ne=a(m,"UL",{"data-svelte-h":!0}),l(ne)!=="svelte-14mziv8"&&(ne.innerHTML=Tt),Je=n(m),re=a(m,"P",{"data-svelte-h":!0}),l(re)!=="svelte-axepee"&&(re.textContent=qt),Xe=n(m),ae=a(m,"OL",{"data-svelte-h":!0}),l(ae)!=="svelte-op5gf3"&&(ae.innerHTML=$t),Ye=n(m),se=a(m,"P",{"data-svelte-h":!0}),l(se)!=="svelte-12asmlu"&&(se.textContent=Ct),Ze=n(m),ie=a(m,"UL",{"data-svelte-h":!0}),l(ie)!=="svelte-6jlau3"&&(ie.innerHTML=kt),et=n(m),le=a(m,"P",{"data-svelte-h":!0}),l(le)!=="svelte-ugu4qd"&&(le.innerHTML=zt),tt=n(m),de=a(m,"P",{"data-svelte-h":!0}),l(de)!=="svelte-1jpjddx"&&(de.innerHTML=Ht),m.forEach(s),Me=n(e),f=a(e,"DIV",{class:!0});var M=v(f);w(A.$$.fragment,M),ot=n(M),ce=a(M,"P",{"data-svelte-h":!0}),l(ce)!=="svelte-1m05y0g"&&(ce.innerHTML=Mt),nt=n(M),me=a(M,"P",{"data-svelte-h":!0}),l(me)!=="svelte-12zo44d"&&(me.textContent=Ft),rt=n(M),ue=a(M,"P",{"data-svelte-h":!0}),l(ue)!=="svelte-1bxqqp"&&(ue.innerHTML=Lt),M.forEach(s),Fe=n(e),g=a(e,"DIV",{class:!0});var ge=v(g);w(Q.$$.fragment,ge),at=n(ge),pe=a(ge,"P",{"data-svelte-h":!0}),l(pe)!=="svelte-lpto01"&&(pe.innerHTML=Pt),st=n(ge),fe=a(ge,"P",{"data-svelte-h":!0}),l(fe)!=="svelte-12zo44d"&&(fe.textContent=Dt),ge.forEach(s),Le=n(e),be=a(e,"P",{}),v(be).forEach(s),this.h()},h(){x(C,"name","hf:doc:metadata"),x(C,"content",Qt),x(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,i){t(document.head,C),d(e,ve,i),d(e,_e,i),d(e,we,i),y(L,e,i),d(e,xe,i),d(e,P,i),d(e,ye,i),d(e,D,i),d(e,Te,i),y(I,e,i),d(e,qe,i),d(e,k,i),y(N,k,null),t(k,Ne),t(k,V),d(e,$e,i),d(e,z,i),y(B,z,null),t(z,Be),t(z,j),d(e,Ce,i),d(e,u,i),y(E,u,null),t(u,Ee),t(u,W),t(u,Se),t(u,G),t(u,Oe),t(u,K),t(u,Ue),t(u,R),d(e,ke,i),d(e,h,i),y(S,h,null),t(h,Ae),t(h,J),t(h,Qe),t(h,X),d(e,ze,i),d(e,p,i),y(O,p,null),t(p,Ve),t(p,Y),t(p,je),t(p,Z),t(p,We),t(p,ee),d(e,He,i),d(e,c,i),y(U,c,null),t(c,Ge),t(c,te),t(c,Ke),t(c,oe),t(c,Re),t(c,ne),t(c,Je),t(c,re),t(c,Xe),t(c,ae),t(c,Ye),t(c,se),t(c,Ze),t(c,ie),t(c,et),t(c,le),t(c,tt),t(c,de),d(e,Me,i),d(e,f,i),y(A,f,null),t(f,ot),t(f,ce),t(f,nt),t(f,me),t(f,rt),t(f,ue),d(e,Fe,i),d(e,g,i),y(Q,g,null),t(g,at),t(g,pe),t(g,st),t(g,fe),d(e,Le,i),d(e,be,i),Pe=!0},p:Bt,i(e){Pe||(T(L.$$.fragment,e),T(I.$$.fragment,e),T(N.$$.fragment,e),T(B.$$.fragment,e),T(E.$$.fragment,e),T(S.$$.fragment,e),T(O.$$.fragment,e),T(U.$$.fragment,e),T(A.$$.fragment,e),T(Q.$$.fragment,e),Pe=!0)},o(e){q(L.$$.fragment,e),q(I.$$.fragment,e),q(N.$$.fragment,e),q(B.$$.fragment,e),q(E.$$.fragment,e),q(S.$$.fragment,e),q(O.$$.fragment,e),q(U.$$.fragment,e),q(A.$$.fragment,e),q(Q.$$.fragment,e),Pe=!1},d(e){e&&(s(ve),s(_e),s(we),s(xe),s(P),s(ye),s(D),s(Te),s(qe),s(k),s($e),s(z),s(Ce),s(u),s(ke),s(h),s(ze),s(p),s(He),s(c),s(Me),s(f),s(Fe),s(g),s(Le),s(be)),s(C),$(L,e),$(I,e),$(N),$(B),$(E),$(S),$(O),$(U),$(A),$(Q)}}}const Qt='{"title":"Utilities for FeatureExtractors","local":"utilities-for-featureextractors","sections":[{"title":"Audio Transformations","local":"transformers.audio_utils.hertz_to_mel","sections":[],"depth":2}],"depth":1}';function Vt(it){return Et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rt extends St{constructor(C){super(),Ot(this,C,Vt,At,Nt,{})}}export{Rt as component};