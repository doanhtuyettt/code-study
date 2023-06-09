import { Button, Box, Divider, FormHelperText, IconButton, InputAdornment, Link, Stack, Typography, } from "@mui/material";
import NextLink from "next/link";
import { LabelStyle } from "../DesignSystem/style";
import { STYLE_CONSTANT } from "./constants";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
const InputStyle = { width: 440, minHeight: 44 };

function RegisterForm() {
	// const defaultValues = {
	//     userName: "",
	//     password: "",
	//     rePassword: "",
	//     organizationName: "",
	//     organizationPhoneNumber: "",
	//     jobCategoryIds: [],
	//     organizationSize: "",
	//     organizationProvinceId: "",
	//     organizationDistrictId: "",
	//     organizationAddress: "",
	//     acceptTerms: true,
	// };

	// const RegisterSchema = Yup.object().shape({
	//     userName: Yup.string().email("Email không đúng định dạng").matches(CHECK_EMAIL, 'Email không đúng định dạng').required("Email không được bỏ trống"),
	//     password: Yup.string().min(6, "Mật khẩu cần tối thiểu 6 ký tự").required("Mật khẩu không được bỏ trống"),
	//     rePassword: Yup.string().oneOf([Yup.ref("password"), null], "Mật khẩu xác nhận không đúng").required("Mật khẩu xác nhận không được bỏ trống"),
	//     organizationName: Yup.string()
	//         .required("Tên doanh nghiệp không được bỏ trống")
	//         .transform(value => value.trim())
	//         .min(1, "Tên doanh nghiệp không được bỏ trống")
	//         .max(50, "Tên doanh nghiệp tối đa 50 ký tự"),
	//     organizationPhoneNumber: Yup.string().required("Số điện thoại không được bỏ trống").matches(/\d+\b/, "Số điện thoại không đúng định dạng"),
	//     jobCategoryIds: Yup.array().min(1, "Ngành nghề không được bỏ trống").max(3, "Chọn tối đa 3 ngành nghê"),
	//     organizationSize: Yup.string().required("Quy mô nhân sự không được bỏ trống"),
	//     organizationProvinceId: Yup.string().required("Tỉnh/Thành phố không được bỏ trống"),
	//     organizationDistrictId: Yup.string().required("Quận/Huyện không được bỏ trống"),
	//     organizationAddress: Yup.string().max(255, "Địa chỉ chi tiết doanh nghiệp tối đa 255 ký tự"),
	//     acceptTerms: Yup.bool().oneOf([true], "Vui lòng đồng ý với chính sách bảo mật"),
	// });

	// const methods = useForm({
	//     mode: 'all',
	//     resolver: yupResolver(RegisterSchema),
	//     defaultValues,
	// });

	// const router = useRouter();

	// const [postRegister] = useRegisterMutation();

	// const [showPassword, setShowPassword] = useState(false);

	// const {
	//     setError,
	//     handleSubmit,
	//     watch,
	//     formState: {isSubmitting, errors, isValid},
	// } = methods;

	// const watchHasEmailValue = watch("userName");
	// const watchProvinceId = watch("organizationProvinceId");

	// const onSubmit = async (data) => {
	//     try {
	//         const body = {
	//             userName: data.userName.trim(),
	//             firstName: data.organizationName.trim(),                            // organization username (Email đăng nhập)
	//             password: data.password,                                        // organization password
	//             organizationName: data.organizationName.trim(),                 // organization name
	//             organizationPhoneNumber: data.organizationPhoneNumber.trim(),   // organization phone number
	//             organizationEmail: data.userName.trim(),                        // organization email
	//             jobCategoryIds: data.jobCategoryIds?.map(item => item?.value),  // organization name
	//             organizationSize: parseInt(data.organizationSize),              // organization size
	//             organizationProvinceId: data.organizationProvinceId,            // organization province
	//             organizationDistrictId: data.organizationDistrictId,            // organization district
	//             organizationAddress: data.organizationAddress.trim(),           // organization address
	//         };
	//         await postRegister(body).unwrap();
	//         await router.push(`/auth/register/success?username=${body.userName}`);
	//     } catch (error) {
	//         const {status} = error;
	//         const message = errorMessages[`${error.status}`] || "Lỗi hệ thống";
	//         if (status === "AUE_06") {
	//             setError('userName', {type: "custom", message: errorMessages[`${error.status}`]})
	//         } else setError("afterSubmit", {...error, message});
	//     }
	// };

	// const handleClearField = (field) => {
	//     if (!field) return;
	//     else methods.resetField(field);
	// };

	// const {data: {items: ProvinceList = []} = {}} = useGetProvinceQuery();
	// const {data: {items: DistrictList = []} = {}} = useGetDistrictByProvinceIdQuery(watchProvinceId, { skip: !watchProvinceId });
	// const {data: {items: JobCategoryList = []} = {}} = useGetJobCategoriesQuery();

	// useEffect(() => {
	//     if (watchProvinceId) {
	//         methods.resetField('organizationDistrictId')
	//     }
	// }, [watchProvinceId]);

	return (
		<Box sx={{ width: "500px" }}>
			{/* <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    {!!errors.afterSubmit && (
                        <Alert severity="error" sx={{mt: 5}}>
                            {errors.afterSubmit.message}
                        </Alert>
                    )} */}
			<LabelStyle title="THÔNG TIN TÀI KHOẢN NGƯỜI DÙNG" />
			<Stack>
				<Stack direction="row" justifyContent="space-between" sx={{ mb: 2.5 }}>
					<Stack>
						<LabelStyle required={true}>Email đăng nhập</LabelStyle>
						<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
							<OutlinedInput
								id="outlined-adornment-weight"
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									'aria-label': 'weight',
								}}
							/>

						</FormControl>
						{/* <RHFTextField
                            name="userName"
                            placeholder="Bắt buộc"
                            style={{ ...InputStyle }}
                            InputProps={{
                                endAdornment: watchHasEmailValue && (
                                    <InputAdornment position="end" sx={{ mr: 1 }}>
                                        <IconButton edge="end" onClick={() => handleClearField("userName")}>
                                            <Iconify icon="ic:baseline-highlight-off" />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        /> */}
					</Stack>
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Stack>
						<LabelStyle required={true}>Mật khẩu</LabelStyle>
						{/* <RHFTextField
                            name="password"
                            placeholder="Bắt buộc"
                            type={showPassword ? "text" : "password"}
                            style={{ ...InputStyle }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ mr: 1 }}>
                                        <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                            <Iconify icon={showPassword ? "ic:outline-remove-red-eye" : "mdi:eye-off-outline"} />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {!errors.password && (
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: STYLE_CONSTANT.FONT_XS,
                                    color: STYLE_CONSTANT.COLOR_TEXT_SECONDARY,
                                    fontWeight: STYLE_CONSTANT.FONT_NORMAL,
                                    mt: 1,
                                }}
                            >
                                Mật khẩu cần tối thiểu 6 ký tự
                            </Typography>
                        )} */}
						<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
							<OutlinedInput
								id="outlined-adornment-weight"
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									'aria-label': 'weight',
								}}
							/>

						</FormControl>
					</Stack>
					<Stack>
						<LabelStyle required={true}>Xác nhận lại mật khẩu</LabelStyle>
						{/* <RHFTextField
                            name="rePassword"
                            placeholder="Bắt buộc"
                            type={showPassword ? "text" : "password"}
                            style={{ ...InputStyle }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ mr: 1 }}>
                                        <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                            <Iconify
                                                icon={showPassword ? "ic:outline-remove-red-eye" : "mdi:eye-off-outline"} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        /> */}
						<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
							<OutlinedInput
								id="outlined-adornment-weight"
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									'aria-label': 'weight',
								}}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>

						</FormControl>
					</Stack>
				</Stack>
			</Stack>
			<Typography>THÔNG TIN DOANH NGHIỆP</Typography>
			<Stack>
				<Stack direction="row" justifyContent="space-between" sx={{ mb: 2.5 }}>
					<Stack>
						<LabelStyle required={true}>Tên doanh nghiệp</LabelStyle>
						{/* <RHFTextField
                            name="organizationName"
                            placeholder="Bắt buộc"
                            style={{ ...InputStyle }}
                        /> */}
					</Stack>
					<Stack>
						<LabelStyle required={true}>Số điện thoại doanh nghiệp</LabelStyle>
						{/* <RHFTextField
                            name="organizationPhoneNumber"
                            placeholder="Bắt buộc"
                            style={{ ...InputStyle }}
                        />*/}
					</Stack>
				</Stack>
				<Stack
					direction="row"
					justifyContent="space-between"
					sx={{ mb: 2.5 }}
				>
					<div style={{ ...InputStyle }}>
						{/* <RHFMuiAutocomplete
                            options={JobCategoryList?.map((i) => ({
                                value: i.id,
                                label: `${i.name[0].toUpperCase()}${i.name.slice(1)}`,
                                name: i?.name,
                            }))}
                            disabledOption={3}
                            name="jobCategoryIds"
                            title="Ngành nghề"
                            isRequired
                            placeholder="Chọn tối đa 3 ngành nghề (bắt buộc)"
                            multiple
                        /> */}
					</div>

					<div style={{ ...InputStyle }}>
						<LabelStyle required={true}>Quy mô nhân sự</LabelStyle>
						{/* <RHFSelect
                            options={
                                LIST_ORGANIZATION_SIZE.map((i) => ({
                                    value: i.value,
                                    label: i.name,
                                    name: i.name,
                                }))
                            }
                            style={{ ...InputStyle }}
                            name="organizationSize"
                            placeholder="Bắt buộc"
                        /> */}
					</div>
				</Stack>
				<Divider sx={{ backgroundColor: STYLE_CONSTANT.COLOR_DIVIDER }} />
				<Stack direction="row" justifyContent="space-between" sx={{ mb: 2.5, mt: 2.5 }}>
					<Stack>
						<div style={{ ...InputStyle }}>
							<LabelStyle required={true}>Tỉnh/Thành phố</LabelStyle>
							{/* <RHFSelect
                                options={
                                    ProvinceList?.map((i) => ({
                                        value: i.id,
                                        label: i.name,
                                    }))
                                }
                                style={{ ...InputStyle }}
                                name="organizationProvinceId"
                                placeholder="Bắt buộc"
                            /> */}
						</div>
					</Stack>
					<Stack>
						<div style={{ ...InputStyle }}>
							<LabelStyle required={true}>Quận/Huyện</LabelStyle>
							{/* <RHFSelect
                                options={
                                    DistrictList?.map((i) => ({
                                        value: i.id,
                                        label: i.name,
                                    }))
                                }
                                style={{ ...InputStyle }}
                                name="organizationDistrictId"
                                placeholder="Bắt buộc"
                                disabled={!watchProvinceId}
                            /> */}
						</div>
					</Stack>
				</Stack>

				<Stack direction="row" justifyContent="space-between" width={STYLE_CONSTANT.WIDTH_FULL}
					sx={{ mb: 2.5 }}>
					<Stack sx={{ width: STYLE_CONSTANT.WIDTH_FULL }}>
						<LabelStyle>Địa chỉ chi tiết doanh nghiệp</LabelStyle>
						{/* <RHFTextField
                            name="organizationAddress"
                            placeholder="Số nhà, tên đường, xã/phường..."
                        /> */}
					</Stack>
				</Stack>
				<Stack direction="row" justifyContent="start" alignItems="center" sx={{ mt: 2.5 }}>
					<Stack sx={{ mr: 0.5 }}>
						{/* <RHFCheckbox style={{ margin: 0, padding: 0 }} name="acceptTerms" /> */}
					</Stack>
					<Stack>
						<Typography
							variant="body2"
							align="center"
							sx={{
								fontSize: STYLE_CONSTANT.FONT_SM,
								fontWeight: STYLE_CONSTANT.FONT_NORMAL,
								color: STYLE_CONSTANT.COLOR_TEXT_BLACK,
							}}
						>
							Tôi đồng ý với
							<NextLink href={''} passHref>
								<Link
									sx={{
										padding: "0px 4px",
										color: STYLE_CONSTANT.COLOR_PRIMARY,
										fontStyle: "italic",
										fontWeight: STYLE_CONSTANT.FONT_SEMIBOLD,
										textDecoration: "none",
									}}
								>
									Chính sách bảo mật
								</Link>
							</NextLink>
							của iVIEC
						</Typography>
					</Stack>
				</Stack>
				<Stack>
					{/* {errors.acceptTerms?.message && (
                        <FormHelperText error={!!errors.acceptTerms}>
                            {errors.acceptTerms?.message}
                        </FormHelperText>
                    )} */}
				</Stack>
			</Stack>
			<Stack sx={{ mt: 2 }}>
				<Button>Sign in</Button>
			</Stack>
			{/* </Stack>
            </FormProvider> */}
		</Box>
	);
}

export default RegisterForm;
